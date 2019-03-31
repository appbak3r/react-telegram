import React from "react";
import { connect } from "react-redux";
import { Route, RouteProps } from "react-router-dom";

import { AppLoading } from "./app-loading/AppLoading";
import { RootState } from "../../store/reducer";

const mapStateToProps = (state: RootState) => {
  return {
    telegram: state.telegram,
    app: state.app
  };
};

export const AppRoute: React.ComponentType<RouteProps> = connect(
  mapStateToProps
)((props: RouteProps & RootState) => {
  const { component, telegram, app, ...restProps } = props;

  const Component: React.ComponentType<any> = component as any;

  return (
    <Route
      {...restProps}
      render={(props) => {
        if (!telegram.isReady || app.fetching) {
          return <AppLoading />;
        }

        return <Component {...props} />;
      }}
    />
  );
}) as any;
