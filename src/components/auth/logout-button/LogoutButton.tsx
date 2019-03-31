import React, { PureComponent } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { Button } from "../../common/button/Button";
import { LogoutAction } from "../../../store/auth/actions";

type OwnProps = {};

type DispatchProps = {
  logout: typeof LogoutAction;
};

type LogoutButtonProps = OwnProps & Partial<DispatchProps>;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      logout: LogoutAction
    },
    dispatch
  );
};

@((connect as any)(null, mapDispatchToProps))
export class LogoutButton extends PureComponent<LogoutButtonProps> {
  render() {
    return (
      <Button className="ri-logout-button" onClick={this.props.logout}>
        Logout
      </Button>
    );
  }
}
