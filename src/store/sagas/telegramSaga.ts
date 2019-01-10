import { all, takeEvery, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { TelegramMessageReceivedActionType, TelegramMessageSendActionType } from '../actions/telegramActions';

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
  })
}

export function* telegramSaga () {
  return yield all([
    call(subscribeToTelegramWorker),
    takeEvery(TelegramMessageSendActionType.SUCCESS,  sendMessage)
  ]);
}
