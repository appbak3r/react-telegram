import { all, put, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { asyncSendMessage } from "../telegram/saga";
import * as actions from "./actions";

/**
 * Represents maximum possible value of 64bit integer.
 * Used for getting most recent chats.
 * @see https://core.telegram.org/tdlib/getting-started#getting-the-list-of-chats
 */
const MAX_CHAT_ORDER_OFFSET = "9223372036854775807";

function* getChats(action: ReturnType<typeof actions.GetChatsAction>) {
  const { params } = action.payload;

  try {
    const { payload } = yield asyncSendMessage({
      "@type": "getChats",
      limit: params.limit,
      offset_order: params.offsetOrder || MAX_CHAT_ORDER_OFFSET,
      offset_chat_id: params.offsetChatId || 0
    });

    yield put(actions.GetChatsSuccessAction(payload.data.chat_ids));
  } catch (error) {
    yield put(actions.GetChatsFailureAction());
  }
}

function* getChat(action: ReturnType<typeof actions.GetChatAction>) {
  const { chatId } = action.payload;

  try {
    const { payload } = yield asyncSendMessage({
      "@type": "getChat",
      chat_id: chatId
    });

    yield put(actions.GetChatSuccessAction(payload.data));
  } catch (error) {
    yield put(actions.GetChatFailureAction());
  }
}

export function* chatsSaga() {
  yield all([
    takeEvery(getType(actions.GetChatsAction), getChats),
    takeEvery(getType(actions.GetChatAction), getChat)
  ]);
}
