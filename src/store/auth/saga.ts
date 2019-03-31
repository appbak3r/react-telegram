import { all, put, takeEvery } from "redux-saga/effects";
import { ActionType, getType } from "typesafe-actions";
import { ReceiveMessageAction } from "../telegram/actions";
import { asyncSendMessage } from "../telegram/saga";
import {
  AUTHORIZATION_STATES,
  TELEGRAM_MESSAGE_TYPES
} from "../telegram/types";
import * as actions from "./actions";

function* updateAuthorization(action: ActionType<typeof ReceiveMessageAction>) {
  switch (action.payload.data["@type"]) {
    case TELEGRAM_MESSAGE_TYPES.UPDATE_AUTHORIZATION_STATE: {
      const message = action.payload.data;

      if (
        message.authorization_state["@type"] === AUTHORIZATION_STATES.AUTHORIZED
      ) {
        yield put(actions.LoginSuccessAction());
      }

      break;
    }

    default: {
      // do nothing
    }
  }
}

function* logout() {
  try {
    yield asyncSendMessage({
      "@type": "logOut"
    });

    yield put(actions.LogoutSuccessAction());
  } catch {
    yield put(actions.LogoutFailureAction());
  }
}

function* setPhoneNumber(
  action: ReturnType<typeof actions.SetPhoneNumberAction>
): Generator {
  try {
    yield asyncSendMessage({
      "@type": "setAuthenticationPhoneNumber",
      phone_number: action.payload.phone
    });

    yield put(actions.SetPhoneNumberSuccessAction());
  } catch (e) {
    yield put(actions.SetPhoneNumberFailureAction());
  }
}

function* setCode(action: ReturnType<typeof actions.SetCodeAction>): Generator {
  try {
    yield asyncSendMessage({
      "@type": "checkAuthenticationCode",
      code: action.payload.code
    });

    yield put(actions.SetCodeSuccessAction());
  } catch (error) {
    yield put(actions.SetCodeFailureAction());
  }
}

function* resendCode(): Generator {
  try {
    yield asyncSendMessage({
      "@type": "resendAuthenticationCode"
    });

    yield put(actions.ResendCodeSuccessAction());
  } catch (error) {
    yield put(actions.ResendCodeFailureAction());
  }
}

function* checkPassword(
  action: ReturnType<typeof actions.CheckPasswordAction>
): Generator {
  try {
    yield asyncSendMessage({
      "@type": "checkAuthenticationPassword",
      password: action.payload.password
    });

    yield put(actions.CheckPasswordSuccessAction());
  } catch (error) {
    yield put(actions.CheckPasswordFailureAction());
  }
}

export function* authSaga() {
  return yield all([
    takeEvery(getType(ReceiveMessageAction), updateAuthorization),
    takeEvery(getType(actions.SetPhoneNumberAction), setPhoneNumber),
    takeEvery(getType(actions.SetCodeAction), setCode),
    takeEvery(getType(actions.ResendCodeAction), resendCode),
    takeEvery(getType(actions.CheckPasswordAction), checkPassword),
    takeEvery(getType(actions.LogoutAction), logout)
  ]);
}
