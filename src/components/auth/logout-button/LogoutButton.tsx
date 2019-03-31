import React, { PureComponent } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { Button } from "../../common/button/Button";
import { LogoutAction } from "../../../store/auth/actions";
import { FormattedMessage } from "react-intl";

type OwnProps = {};

type DispatchProps = {
  logout: typeof LogoutAction;
  title?: string | React.ReactNode;
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
    const { title } = this.props;
    return (
      <Button className="ri-logout-button" onClick={this.props.logout}>
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
