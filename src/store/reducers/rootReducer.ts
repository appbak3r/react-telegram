import { combineReducers } from 'redux';

import { appReducer, AppState } from './appReducer';

export interface RootState {
  app: AppState;
}

export const rootReducer = (state: any, action: any) => {
  return combineReducers({
    app: appReducer,
  })(state, action);
};
