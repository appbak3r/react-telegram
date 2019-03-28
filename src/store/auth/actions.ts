import { createAction } from 'typesafe-actions';
import { LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_FETCHING, LOGOUT_SUCCESS } from './types';

export const LogoutAction        = createAction(LOGOUT_FETCHING);
export const LogoutSuccessAction = createAction(LOGOUT_SUCCESS);
export const LogoutFailureAction = createAction(LOGOUT_FAILURE);

export const LoginSuccessAction = createAction(LOGIN_SUCCESS);
