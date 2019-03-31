export const SEND_MESSAGE_FETCHING = "@@rt/telegram/send-message/fetching";
export const SEND_MESSAGE_SUCCESS = "@@rt/telegram/send-message/success";
export const SEND_MESSAGE_FAILURE = "@@rt/telegram/send-message/failure";

export const RECEIVE_MESSAGE = "@rt/telegram/receive-message";

export const AUTHORIZATION_STATES = {
  PHONE_NUMBER: "authorizationStateWaitPhoneNumber",
  CODE: "authorizationStateWaitCode",
  PASSWORD: "authorizationStateWaitPassword",
  AUTHORIZED: "authorizationStateReady",
  LOGGING_OUT: "authorizationStateLoggingOut",
  LOADING: "authorizationStateWaitEncryptionKey",
  WAIT_TDLIB: "authorizationStateWaitTdlibParameters",
  CLOSED: "authorizationStateClosed"
};

export type TelegramMessage = {
  [key: string]: any;
};

export type TelegramMessagePayload = {
  data: TelegramMessage;
};

export const TELEGRAM_MESSAGE_TYPES = {
  UPDATE_CONNECTION_STATE: "updateConnectionState",
  UPDATE_AUTHORIZATION_STATE: "updateAuthorizationState",
  UPDATE_OPTION: "updateOption",
  UPDATE_CHAT_READ_INBOX: "updateChatReadInbox",
  READY: "ok"
};

export const TELEGRAM_CONNECTION_STATE = {
  CONNECTING: "connectionStateConnecting",
  READY: "connectionStateReady"
};

export const TELEGRAM_AUTHETNTICATION_CODE_TYPES = {
  SMS: "authenticationCodeTypeSms",
  MESSAGE: "authenticationCodeTypeTelegramMessage"
};

export type TelegramOptions = {
  animation_search_bot_username: string;
  authorization_date: number;
  basic_group_size_max: number;
  call_connect_timeout_ms: number;
  call_packet_timeout_ms: number;
  calls_enabled: boolean;
  favorite_stickers_limit: number;
  forwarded_message_count_max: number;
  message_caption_length_max: number;
  message_text_length_max: number;
  my_id: number;
  photo_search_bot_username: string;
  pinned_chat_count_max: number;
  supergroup_size_max: number;
  t_me_url: string;
  test_mode: boolean;
  venue_search_bot_username: string;
  version: string;
  [key: string]: any;
};
