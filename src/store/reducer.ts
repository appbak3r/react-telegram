import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { authReducer } from './auth/reducer';
import { telegramReducer } from './telegram/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  telegram: telegramReducer,
});

export type RootState = StateType<typeof rootReducer>;
