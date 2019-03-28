import { all, put, takeEvery } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { ReceiveMessageAction, SendMessageAction } from '../telegram/actions';
import { AUTHORIZATION_STATES, TELEGRAM_MESSAGE_TYPES } from '../telegram/types';
import { LoginSuccessAction, LogoutAction, LogoutSuccessAction } from './actions';

function* updateAuthorization (action: ActionType<typeof ReceiveMessageAction>) {
  switch (action.payload.data['@type']) {
    case TELEGRAM_MESSAGE_TYPES.UPDATE_AUTHORIZATION_STATE: {
      const message = action.payload.data;
      
      
      if (message.authorization_state['@type'] === AUTHORIZATION_STATES.AUTHORIZED) {
        yield put(LoginSuccessAction());
      }
      
      break;
    }
    
    default: {
      console.log('skip...');
    }
  }
}

function* logout () {
  yield put(SendMessageAction({ '@type': 'logOut' }));
  yield put(LogoutSuccessAction());
}

export function* authSaga () {
  return yield all([
    takeEvery(getType(ReceiveMessageAction), updateAuthorization),
    takeEvery(getType(LogoutAction), logout)
  ]);
}
