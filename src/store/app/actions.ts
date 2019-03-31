import { createAction } from "typesafe-actions";
import {
  GET_COUNTRY_CODE,
  GET_COUNTRY_CODE_FAILURE,
  GET_COUNTRY_CODE_SUCCESS
} from "./types";

export const GetCountryCodeAction = createAction(GET_COUNTRY_CODE);
export const GetCountryCodeSuccessAction = createAction(
  GET_COUNTRY_CODE_SUCCESS,
  (action) => (countryCode: string) => action({ countryCode })
);
export const GetCountryCodeFailureAction = createAction(
  GET_COUNTRY_CODE_FAILURE
);
