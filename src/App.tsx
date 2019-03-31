import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router";
import "./assets/styles/main.scss";
import { bindActionCreators, Dispatch } from "redux";
import { AppRoute } from "./components/pages/AppRoute";
import { Login } from "./components/pages/login/Login";
import { Messenger } from "./components/pages/messenger/Messenger";
import { PrivateRoute } from "./components/pages/PrivateRoute";
import { GetCountryCodeAction } from "./store/app/actions";
import { AppState } from "./store/app/reducer";
import { RootState } from "./store/reducer";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getCountryCode: GetCountryCodeAction
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState): AppState => {
  return state.app;
};

type OwnProps = {};

type DispatchProps = {
  getCountryCode: typeof GetCountryCodeAction;
};

type AppProps = OwnProps & DispatchProps & AppState;

@((connect as any)(mapStateToProps, mapDispatchToProps, null, { pure: false }))
class ConnectedApp extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    if (!props.countryCode) {
      props.getCountryCode();
    }
  }

  render(): React.ReactNode {
    return (
      <div className="rt-app">
        <Switch>
          <AppRoute path={"/login"} exact={true} component={Login} />

          <PrivateRoute path="/" component={Messenger} />
        </Switch>
      </div>
    );
  }
}

export const App = (ConnectedApp as unknown) as React.ComponentClass<OwnProps>;
