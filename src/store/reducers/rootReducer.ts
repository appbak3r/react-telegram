import { combineReducers } from 'redux';

export const rootReducer = (state: any, action: any) => {
  return combineReducers({})(state, action);
};
