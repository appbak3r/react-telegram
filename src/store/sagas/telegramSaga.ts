import { all, takeEvery, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { TelegramMessageReceivedActionType, TelegramMessageSendActionType } from '../actions/telegramActions';
import { AUTHORIZATION_STATES } from '../reducers/appReducer';

const TelegramWorker = require('../../services/telegram.worker');

let worker: any;

function createWorker () {
  worker = new TelegramWorker();
  
  return eventChannel((emit: any) => {
    worker.onmessage = (event: any) => {
      emit({
        type: TelegramMessageReceivedActionType.SUCCESS,
        payload: {
          data: event.data,
        }
      });
    };
    
    return worker.terminate;
  });
}

function* subscribeToTelegramWorker () {
  const channel = yield createWorker();
  
  yield takeEvery(channel, dispatchMessage);
}

function* dispatchMessage (action: any) {
  return yield put(action);
}

function sendMessage (action: any) {
  if (!worker) {
    throw new Error('Worker is not yet ready');
  }
  
  worker.postMessage({
    type: 'send',
    payload: action.payload,
  });
}

export const asyncSendMessage = (message: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const onMessageReceived = (event: any) => {
      worker.removeEventListener('message', onMessageReceived);
      
      if (event.data['@type'] === 'error') {
        return reject(event.data);
      }
      
      return resolve(event.data);
    };
    
    worker.addEventListener('message', onMessageReceived);
  
    worker.postMessage({
      type: 'send',
      payload: message,
    });
  });
};

function loadInitialData (action: any) {
  switch (action.payload.data['@type']) {
    case 'updateAuthorizationState': {
      if (action.payload.data.authorization_state['@type'] === AUTHORIZATION_STATES.AUTHORIZED) {
        worker.postMessage({
          type: 'send',
          payload: {
            '@type': 'setOption',
            name: 'online',
            value: {
              '@type': 'optionValueBoolean',
              value: true,
            },
          }
        });
      }
    }
  }
}

export function* telegramSaga () {
  return yield all([
    call(subscribeToTelegramWorker),
    takeEvery(TelegramMessageReceivedActionType.SUCCESS, loadInitialData),
    takeEvery(TelegramMessageSendActionType.SUCCESS, sendMessage)
  ]);
}
