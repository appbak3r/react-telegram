import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { LogoutAction } from "../../../store/auth/actions";
import { AuthState } from "../../../store/auth/reducer";
import { RootState } from "../../../store/reducer";
import { Button } from "../../common/button/Button";

type OwnProps = {
  title?: string | React.ReactNode;
};

type StateProps = AuthState;

type DispatchProps = {
  logout: typeof LogoutAction;
};

type LogoutButtonProps = OwnProps & DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      logout: LogoutAction
    },
    dispatch
  );
};

const mapStateToProps = (state: RootState) => {
  return state.auth;
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedLogoutButton extends PureComponent<LogoutButtonProps> {
  render() {
    const { title, logout, isLoggingOut } = this.props;
    return (
      <Button
        className="ri-logout-button"
        onClick={logout}
        loading={isLoggingOut}>
        {title || (
          <FormattedMessage
            id={"components.logout-button.title"}
            defaultMessage={"Logout"}
          />
        )}
      </Button>
    );
  }
}

export const LogoutButton = (ConnectedLogoutButton as unknown) as React.ComponentType<
  OwnProps
>;
