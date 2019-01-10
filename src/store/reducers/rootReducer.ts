import { combineReducers } from 'redux';

export interface RootState {

}

export const rootReducer = (state: any, action: any) => {
  return combineReducers({})(state, action);
};
