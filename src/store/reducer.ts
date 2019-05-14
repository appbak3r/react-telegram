import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import { appReducer } from "./app/reducer";
import { authReducer } from "./auth/reducer";
import { chatsReducer } from "./chats/reducer";
import { telegramReducer } from "./telegram/reducer";
import { filesReducer } from "./files/reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  telegram: telegramReducer,
  chats: chatsReducer,
  files: filesReducer
});

export type RootState = StateType<typeof rootReducer>;
