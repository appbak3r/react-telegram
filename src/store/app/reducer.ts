import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export type AppAction = ActionType<typeof actions>;

export type AppState = {
  fetching: boolean;
  countryCode: Nullable<string>;
};

const initialState: AppState = {
  fetching: false,
  countryCode: "US"
};

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case getType(actions.GetCountryCodeAction): {
      return {
        ...state,
        fetching: true
      };
    }

    case getType(actions.GetCountryCodeSuccessAction): {
      const countryCode = action.payload.countryCode.toUpperCase();

      return {
        ...state,
        fetching: false,
        countryCode: countryCode || initialState.countryCode
      };
    }

    case getType(actions.GetCountryCodeFailureAction): {
      return {
        ...state,
        fetching: false
      };
    }

    default: {
      return state;
    }
  }
};
