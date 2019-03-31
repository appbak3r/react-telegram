import block from "bem-cn";
import React, { PureComponent } from "react";
import { AUTHORIZATION_STATES } from "../../../store/telegram/types";
import { CodeForm } from "../code-form/CodeForm";
import { PasswordForm } from "../password-form/PasswordForm";
import { PhoneForm } from "../phone-form/PhoneForm";
import "./styles.scss";

type LoginFormProps = {
  state: Nullable<string>;
};

export class LoginForm extends PureComponent<LoginFormProps> {
  render() {
    const bem = block("rt-login-form");

    return <div className={bem()}>{this.renderForm()}</div>;
  }

  renderForm(): React.ReactNode {
    const { state } = this.props;

    switch (state) {
      case AUTHORIZATION_STATES.PHONE_NUMBER: {
        return <PhoneForm />;
      }

      case AUTHORIZATION_STATES.CODE: {
        return <CodeForm />;
      }

      case AUTHORIZATION_STATES.PASSWORD: {
        return <PasswordForm />;
      }

      default: {
        return state;
      }
    }
  }
}
