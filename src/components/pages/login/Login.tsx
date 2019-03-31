import block from "bem-cn";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AuthState } from "../../../store/auth/reducer";
import { RootState } from "../../../store/reducer";
import { LoginForm } from "../../auth/login-form/LoginForm";
import "./styles.scss";

type OwnProps = {};
type LoginProps = OwnProps & AuthState;

const mapStateToProps = (state: RootState): AuthState => {
  return state.auth;
};

@((connect as any)(mapStateToProps))
class ConnectedLogin extends Component<LoginProps> {
  render() {
    const bem = block("rt-login");

    const { authState, isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className={bem()}>
        <FormattedMessage
          id={"common.pages.login.title"}
          defaultMessage={"Telegram | Sign in"}>
          {(title) => (
            <Helmet>
              <title>{title}</title>
            </Helmet>
          )}
        </FormattedMessage>

        <div className={bem("body")}>
          <LoginForm state={authState} />
        </div>
      </div>
    );
  }
}

export const Login = (ConnectedLogin as unknown) as React.ComponentType<
  OwnProps
>;
