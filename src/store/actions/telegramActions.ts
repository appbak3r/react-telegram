import { actionType } from '../../utils/actionType';

export const TelegramMessageReceivedActionType = actionType('telegram-message-received');
export const TelegramMessageSendActionType     = actionType('telegram-message-send');

export const sendMessage = () => {
  return (dispatch: any) => {
    dispatch({
      type: TelegramMessageSendActionType.SUCCESS,
      payload: {
        '@type': 'getTextEntities',
        text: 'hello',
      }
    });
  }
};

export interface TelegramActions  {
  sendMessage: () => (dispatch: any) => void;
}
