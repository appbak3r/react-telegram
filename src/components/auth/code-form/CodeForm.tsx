import React, { PureComponent } from "react";
import { Form } from "react-final-form";
import { Button } from "../../common/button/Button";
import { FormattedMessage } from "react-intl";
import { Input } from "../../forms/input/Input";
import { LogoutButton } from "../logout-button/LogoutButton";

interface CodeFormProps {
  onSubmit: (message: any) => void;
}

export class CodeForm extends PureComponent<CodeFormProps> {
  onSubmit = (values: any) => {
    this.props.onSubmit({
      "@type": "checkAuthenticationCode",
      ...values
    });
  };

  sendViaSms = () => {
    this.props.onSubmit({
      "@type": "resendAuthenticationCode"
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="rt-code-form">
              <h1>Enter code</h1>

              <Input name="code" />

              <Button type="button" onClick={this.sendViaSms}>
                <FormattedMessage
                  id="components.code-form.resend"
                  defaultMessage={"Resend"}
                />
              </Button>

              <Button className="rt-button--primary">
                <FormattedMessage
                  id="components.code-form.submit"
                  defaultMessage={"Next"}
                />
              </Button>

              <LogoutButton />
            </form>
          );
        }}
      </Form>
    );
  }
}
