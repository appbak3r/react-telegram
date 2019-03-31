import { all, put, takeEvery } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { ReceiveMessageAction } from '../telegram/actions';
import { asyncSendMessage } from '../telegram/saga';
import { AUTHORIZATION_STATES, TELEGRAM_MESSAGE_TYPES } from '../telegram/types';
import * as actions from './actions';

function* updateAuthorization (action: ActionType<typeof ReceiveMessageAction>) {
  switch (action.payload.data['@type']) {
    case TELEGRAM_MESSAGE_TYPES.UPDATE_AUTHORIZATION_STATE: {
      const message = action.payload.data;
      
      if (message.authorization_state['@type'] === AUTHORIZATION_STATES.AUTHORIZED) {
        yield put(actions.LoginSuccessAction());
      }
      
      break;
    }
    
    default: {
      console.log('skip...');
    }
  }
}

function* logout () {
  try {
    yield asyncSendMessage({
      '@type': 'logOut',
    });
    
    yield put(actions.LogoutSuccessAction());
  } catch {
    yield put(actions.LogoutFailureAction());
  }
}

function* setPhoneNumber (action: any) {
  try {
    yield asyncSendMessage({
      '@type': 'setAuthenticationPhoneNumber',
      phone_number: action.payload.phone
    });
    
    yield put(actions.SetPhoneNumberSuccessAction());
  } catch (e) {
    yield put(actions.SetPhoneNumberFailureAction());
  }
}

export function* authSaga () {
  return yield all([
    takeEvery(getType(ReceiveMessageAction), updateAuthorization),
    takeEvery(getType(actions.SetPhoneNumberAction), setPhoneNumber),
    takeEvery(getType(actions.LogoutAction), logout)
  ]);
}
