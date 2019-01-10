import { all, call } from 'redux-saga/effects';

import { telegramSaga } from './telegramSaga';

export function* rootSaga (): any {
  return yield all([
    call(telegramSaga)
  ]);
}
