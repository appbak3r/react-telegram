import { createSelector } from "reselect";
import { RootState } from "../reducer";
import { ChatsState } from "./reducer";

const chatsSelector = (state: RootState) => state.chats;

export const chatSelector = (chatId: number) => {
  return createSelector(
    chatsSelector,
    ({ chats }: ChatsState) => {
      return chats.get(chatId);
    }
  );
};
