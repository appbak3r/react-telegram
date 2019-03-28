export const SEND_MESSAGE_FETCHING = '@@rt/telegram/send-message/fetching';
export const SEND_MESSAGE_SUCCESS  = '@@rt/telegram/send-message/success';
export const SEND_MESSAGE_FAILURE  = '@@rt/telegram/send-message/failure';

export const RECEIVE_MESSAGE = '@rt/telegram/receive-message';

export const AUTHORIZATION_STATES = {
  PHONE_NUMBER: 'authorizationStateWaitPhoneNumber',
  CODE: 'authorizationStateWaitCode',
  PASSWORD: 'authorizationStateWaitPassword',
  AUTHORIZED: 'authorizationStateReady',
  LOGGING_OUT: 'authorizationStateLoggingOut',
  LOADING: 'authorizationStateWaitEncryptionKey',
  CLOSED: 'authorizationStateClosed'
};

export type TelegramMessage = {
  [key: string]: any;
};

export type TelegramMessagePayload = {
  data: TelegramMessage,
};


export const TELEGRAM_MESSAGE_TYPES = {
  UPDATE_CONNECTION_STATE: 'updateConnectionState',
  UPDATE_AUTHORIZATION_STATE: 'updateAuthorizationState',
  READY: 'ok',
};

export const TELEGRAM_CONNECTION_STATE = {
  CONNECTING: 'connectionStateConnecting',
  READY: 'connectionStateReady',
};
