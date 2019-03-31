import { createAction } from "typesafe-actions";
import {
  RECEIVE_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_FETCHING,
  SEND_MESSAGE_SUCCESS,
  TelegramMessage,
  TelegramMessagePayload
} from "./types";

export const SendMessageAction = createAction(
  SEND_MESSAGE_FETCHING,
  (action) => (data: TelegramMessage) => action(data)
);
export const SendMessageFailureAction = createAction(SEND_MESSAGE_FAILURE);
export const SendMessageSuccessAction = createAction(SEND_MESSAGE_SUCCESS);

export const ReceiveMessageAction = createAction(
  RECEIVE_MESSAGE,
  (action) => (data: TelegramMessagePayload) => action(data)
);
