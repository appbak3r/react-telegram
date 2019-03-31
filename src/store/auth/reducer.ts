import { ActionType, getType } from 'typesafe-actions';
import * as telegramActions from '../telegram/actions';
import { TelegramAction } from '../telegram/reducer';
import { AUTHORIZATION_STATES, TELEGRAM_MESSAGE_TYPES } from '../telegram/types';
import * as actions from './actions';

export type AuthState = {
  readonly isAuthorized: boolean;
  readonly isFetching: boolean;
  readonly error: Nullable<any>;
  readonly authState: Nullable<string>;
  readonly isRegistered: boolean;
  readonly data?: any;
};

export type AuthAction = ActionType<typeof actions>

const initialState: AuthState = {
  isAuthorized: false,
  isRegistered: false,
  isFetching: false,
  error: null,
  authState: null,
};

export const authReducer = (state = initialState, action: AuthAction | TelegramAction): AuthState => {
  switch (action.type) {
    case getType(actions.LogoutAction): {
      return {
        ...state,
        isFetching: true,
      };
    }
    
    case getType(actions.LogoutSuccessAction): {
      return {
        ...state,
        isFetching: false,
        isAuthorized: false,
      };
    }
    
    case getType(actions.LogoutFailureAction): {
      return {
        ...state,
        isFetching: false,
      };
    }
    
    case getType(actions.LoginSuccessAction): {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    
    case getType(actions.SetPhoneNumberAction): {
      return {
        ...state,
        isFetching: true,
      };
    }
    
    case getType(actions.SetPhoneNumberSuccessAction): {
      return {
        ...state,
        isFetching: false,
      };
    }
    
    case getType(actions.SetPhoneNumberFailureAction): {
      return {
        ...state,
        isFetching: false,
      };
    }
    
    case getType(telegramActions.ReceiveMessageAction): {
      const message = action.payload.data;
      
      if (message['@type'] === TELEGRAM_MESSAGE_TYPES.UPDATE_AUTHORIZATION_STATE) {
        switch (message.authorization_state['@type']) {
          case AUTHORIZATION_STATES.CODE: {
            return {
              ...state,
              data: message.authorization_state.code_info,
              isRegistered: message.authorization_state.is_registered,
              authState: message.authorization_state['@type'],
              isFetching: false,
            };
          }
          
          default: {
            return {
              ...state,
              authState: message.authorization_state['@type'],
            };
          }
        }
      }
      
      return state;
    }
    
    default: {
      return state;
    }
  }
};
