import { createAction } from "typesafe-actions";
import {
  Chat,
  GET_CHAT,
  GET_CHAT_FAILURE,
  GET_CHAT_SUCCESS,
  GET_CHATS,
  GET_CHATS_FAILURE,
  GET_CHATS_SUCCESS,
  GetChatsParams
} from "./types";

export const GetChatsAction = createAction(
  GET_CHATS,
  (action) => (params: GetChatsParams) => action({ params })
);
export const GetChatsSuccessAction = createAction(
  GET_CHATS_SUCCESS,
  (action) => (chats: number[]) =>
    action({
      chats
    })
);
export const GetChatsFailureAction = createAction(GET_CHATS_FAILURE);

export const GetChatAction = createAction(
  GET_CHAT,
  (action) => (chatId: number) => action({ chatId })
);
export const GetChatSuccessAction = createAction(
  GET_CHAT_SUCCESS,
  (action) => (chat: Chat) => action({ chat })
);
export const GetChatFailureAction = createAction(GET_CHAT_FAILURE);
