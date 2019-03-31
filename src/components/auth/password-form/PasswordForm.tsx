import React, { PureComponent } from "react";
import { Form } from "react-final-form";

interface PasswordFormProps {
  onSubmit: (message: any) => void;
}

export class PasswordForm extends PureComponent<PasswordFormProps> {
  onSubmit = (values: any) => {
    this.props.onSubmit({
      "@type": "checkAuthenticationPassword",
      ...values
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="rt-password-form">
              <h1>Enter password</h1>

              <button>submit</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
