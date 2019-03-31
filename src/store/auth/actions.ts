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

export const SetCodeAction = createAction(
  types.SET_CODE,
  (action) => (code: string) => action({ code })
);
export const SetCodeSuccessAction = createAction(types.SET_CODE_SUCCESS);
export const SetCodeFailureAction = createAction(types.SET_CODE_FAILURE);

export const ResendCodeAction = createAction(types.RESEND_CODE);
export const ResendCodeSuccessAction = createAction(types.RESEND_CODE_SUCCESS);
export const ResendCodeFailureAction = createAction(types.RESEND_CODE_FAILURE);

export const CheckPasswordAction = createAction(
  types.CHECK_PASSWORD,
  (action) => (password: string) => action({ password })
);
export const CheckPasswordSuccessAction = createAction(
  types.CHECK_PASSWORD_SUCCESS
);
export const CheckPasswordFailureAction = createAction(
  types.CHECK_PASSWORD_FAILURE
);
