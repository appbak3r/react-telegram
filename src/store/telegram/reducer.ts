import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";
import {
  TELEGRAM_CONNECTION_STATE,
  TELEGRAM_MESSAGE_TYPES,
  TelegramOptions
} from "./types";

export type TelegramState = {
  readonly isConnecting: boolean;
  readonly isReady: boolean;
  readonly options: Partial<TelegramOptions>;
};

export type TelegramAction = ActionType<typeof actions>;

const initialState: TelegramState = {
  isConnecting: true,
  isReady: false,
  options: {}
};

export const telegramReducer = (
  state = initialState,
  action: TelegramAction
): TelegramState => {
  switch (action.type) {
    case getType(actions.ReceiveMessageAction): {
      const message = action.payload.data;

      switch (message["@type"]) {
        case TELEGRAM_MESSAGE_TYPES.UPDATE_CONNECTION_STATE: {
          switch (message.state["@type"]) {
            case TELEGRAM_CONNECTION_STATE.CONNECTING: {
              return {
                ...state,
                isConnecting: true
              };
            }

            case TELEGRAM_CONNECTION_STATE.READY: {
              return {
                ...state,
                isConnecting: false
              };
            }

            default: {
              return state;
            }
          }
        }

        case TELEGRAM_MESSAGE_TYPES.READY: {
          if (
            message["@extra"] &&
            message["@extra"]["@type"] === "setTdlibParameters"
          ) {
            return {
              ...state,
              isReady: true
            };
          }

          return state;
        }

        case TELEGRAM_MESSAGE_TYPES.UPDATE_OPTION: {
          const { options } = state;

          options[message.name] = message.value.value;

          return {
            ...state,
            options: options
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
