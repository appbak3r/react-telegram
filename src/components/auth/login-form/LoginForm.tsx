import React, { PureComponent } from "react";

import { PhoneForm } from "../phone-form/PhoneForm";
import { CodeForm } from "../code-form/CodeForm";
import { PasswordForm } from "../password-form/PasswordForm";
import { AUTHORIZATION_STATES } from "../../../store/telegram/types";

type LoginFormProps = {
  state: any;
  onSubmit: any;
};

export class LoginForm extends PureComponent<LoginFormProps> {
  render() {
    return <div className="rt-login-form">{this.renderForm()}</div>;
  }

  renderForm(): React.ReactNode {
    const { state, onSubmit } = this.props;

    switch (state) {
      case AUTHORIZATION_STATES.PHONE_NUMBER: {
        return <PhoneForm />;
      }

      case AUTHORIZATION_STATES.CODE: {
        return <CodeForm />;
      }

      case AUTHORIZATION_STATES.PASSWORD: {
        return <PasswordForm onSubmit={onSubmit} />;
      }

      default: {
        return state;
      }
    }
  }
}
