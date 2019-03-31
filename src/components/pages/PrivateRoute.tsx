import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { AppLoading } from "./app-loading/AppLoading";
import { RootState } from "../../store/reducer";

const mapStateToProps = (state: RootState) => {
  return state;
};

export const PrivateRoute: React.ComponentType<RouteProps> = connect(
  mapStateToProps
)((props: RouteProps & RootState) => {
  const { component, telegram, auth, app, ...restProps } = props;

  const Component: React.ComponentType<any> = component as any;

  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!telegram.isReady || app.fetching || auth.isConnecting) {
          return <AppLoading />;
        }

        if (!auth.isAuthorized) {
          return <Redirect to={"/login"} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}) as any;
