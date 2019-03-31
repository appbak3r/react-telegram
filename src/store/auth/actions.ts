import { createAction } from "typesafe-actions";
import * as types from "./types";

export const LogoutAction = createAction(types.LOGOUT_FETCHING);
export const LogoutSuccessAction = createAction(types.LOGOUT_SUCCESS);
export const LogoutFailureAction = createAction(types.LOGOUT_FAILURE);

export const LoginSuccessAction = createAction(types.LOGIN_SUCCESS);

export const SetPhoneNumberAction = createAction(
  types.SET_PHONE_NUMBER,
  (action) => (phone: string) => action({ phone })
);
export const SetPhoneNumberSuccessAction = createAction(
  types.SET_PHONE_NUMBER_SUCCESS
);
export const SetPhoneNumberFailureAction = createAction(
  types.SET_PHONE_NUMBER_FAILURE
);
