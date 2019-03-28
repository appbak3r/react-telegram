import { call, all } from 'redux-saga/effects';

import { telegramSaga } from './telegram/saga';
import { authSaga } from './auth/saga';

export function* rootSaga () {
  return yield all([
    call(telegramSaga),
    call(authSaga)
  ]);
}
