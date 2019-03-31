import { all, call } from "redux-saga/effects";
import { appSaga } from "./app/saga";
import { authSaga } from "./auth/saga";
import { chatsSaga } from "./chats/saga";
import { telegramSaga } from "./telegram/saga";

export function* rootSaga() {
  return yield all([
    call(appSaga),
    call(telegramSaga),
    call(authSaga),
    call(chatsSaga)
  ]);
}
