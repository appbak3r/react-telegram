import { TelegramMessageReceivedActionType } from '../actions/telegramActions';

export const AUTHORIZATION_STATES = {
  PHONE_NUMBER: 'authorizationStateWaitPhoneNumber',
  CODE: 'authorizationStateWaitCode',
  PASSWORD: 'authorizationStateWaitPassword',
  AUTHORIZED: 'authorizationStateOk',
  LOGGING_OUT: 'authorizationStateLoggingOut',
  LOADING: ''
};

export interface AppState {
  ready: boolean;
  authState: string;
  connecting: boolean;
}

const initialState: AppState = {
  ready: false,
  connecting: true,
  authState: AUTHORIZATION_STATES.LOADING,
};

export const appReducer = (state: AppState = initialState, action: any): AppState => {
  switch (action.type) {
    case TelegramMessageReceivedActionType.SUCCESS: {
      switch (action.payload.data['@type']) {
        case 'updateConnectionState': {
          switch (action.payload.data.state['@type']) {
            case 'connectionStateConnecting': {
              return {
                ...state,
                connecting: true,
              };
            }
            
            case 'connectionStateReady': {
              return {
                ...state,
                connecting: false,
              };
            }
          }
          
          return state;
        }
        
        case 'updateAuthorizationState': {
          return {
            ...state,
            authState: action.payload.data.authorization_state['@type'],
          };
        }
        
        case 'ok': {
          if (action.payload.data['@extra'] && action.payload.data['@extra']['@type'] === 'setTdlibParameters') {
            return {
              ...state,
              ready: true,
            };
          } else {
            return state;
          }
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
