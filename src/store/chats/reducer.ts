import { ActionType, getType } from "typesafe-actions";
import { ReceiveMessageAction } from "../telegram/actions";
import { TelegramAction } from "../telegram/reducer";
import { TELEGRAM_MESSAGE_TYPES } from "../telegram/types";
import * as actions from "./actions";
import { Chat } from "./types";

export type ChatsState = {
  readonly isFetching: boolean;
  readonly chats: Map<number, Chat>;
  readonly chatIds: number[];
};

export type ChatsAction = ActionType<typeof actions>;

const initialState: ChatsState = {
  isFetching: false,
  chats: new Map(),
  chatIds: []
};

export const chatsReducer = (
  state = initialState,
  action: ChatsAction | TelegramAction
): ChatsState => {
  switch (action.type) {
    case getType(actions.GetChatsAction): {
      return {
        ...state,
        isFetching: true
      };
    }

    case getType(actions.GetChatSuccessAction): {
      const { chat } = action.payload;
      const { chats } = state;

      chats.set(chat.id, chat);

      return {
        ...state,
        chats: new Map<number, Chat>(chats)
      };
    }

    case getType(actions.GetChatsSuccessAction): {
      return {
        ...state,
        chatIds: action.payload.chats
      };
    }

    case getType(ReceiveMessageAction): {
      const message = action.payload.data;

      switch (message["@type"]) {
        case TELEGRAM_MESSAGE_TYPES.UPDATE_CHAT_READ_INBOX: {
          let { chats } = state;

          const chat = chats.get(message.chat_id);

          if (chat) {
            const newChat = {
              ...chat,
              unread_count: message.unread_count
            };

            chats.set(newChat.id, newChat);

            chats = new Map(chats);
          }

          return {
            ...state,
            chats
          };
        }

        case "updateChatPhoto": {
          let { chats } = state;

          const chat = chats.get(message.chat_id);

          if (chat) {
            chat.photo = message.photo;

            chats.set(chat.id, chat);

            chats = new Map(chats);
          }

          return {
            ...state,
            chats
          };
        }

        default: {
          return state;
        }
      }
    }

    default: {
      return state;
    }
  }
};
