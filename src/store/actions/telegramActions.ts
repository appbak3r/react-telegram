import { actionType } from '../../utils/actionType';

export const TelegramMessageReceivedActionType = actionType('telegram-message-received');
export const TelegramMessageSendActionType     = actionType('telegram-message-send');

export const sendMessage = (message: any) => {
  return (dispatch: any) => {
    dispatch({
      type: TelegramMessageSendActionType.SUCCESS,
      payload: message,
    });
  }
};

export interface TelegramActions  {
  sendMessage: (message: any) => (dispatch: any) => void;
}
