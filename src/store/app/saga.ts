import { all, put, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { GeoApiService } from "../../services/GeoApiService";
import * as actions from "./actions";

function* getCountryCode() {
  try {
    const countryCode = yield GeoApiService.getCountryCode();

    yield put(actions.GetCountryCodeSuccessAction(countryCode));
  } catch {
    yield put(actions.GetCountryCodeFailureAction());
  }
}

export function* appSaga() {
  yield all([takeEvery(getType(actions.GetCountryCodeAction), getCountryCode)]);
}
