import React, { PureComponent } from "react";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ResendCodeAction, SetCodeAction } from "../../../store/auth/actions";
import { AuthState } from "../../../store/auth/reducer";
import { RootState } from "../../../store/reducer";
import { Button } from "../../common/button/Button";
import { FormattedMessage } from "react-intl";
import { Input } from "../../forms/input/Input";
import { LogoutButton } from "../logout-button/LogoutButton";

type StateProps = AuthState;

type DispatchProps = {
  setCode: typeof SetCodeAction;
  resendCode: typeof ResendCodeAction;
};

type OwnProps = {};

type CodeFormProps = OwnProps & DispatchProps & StateProps;

type FormValues = {
  code?: string;
};

const mapStateToProps = (state: RootState) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setCode: SetCodeAction,
      resendCode: ResendCodeAction
    },
    dispatch
  );
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedCodeForm extends PureComponent<CodeFormProps> {
  onSubmit = ({ code }: FormValues) => {
    if (code) {
      this.props.setCode(code);
    }
  };

  resendCode = () => {
    this.props.resendCode();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="rt-code-form">
              <h1>Enter code</h1>

              <Input name="code" />

              <Button type="button" onClick={this.resendCode}>
                <FormattedMessage
                  id="components.code-form.resend"
                  defaultMessage={"Resend"}
                />
              </Button>

              <Button
                className="rt-button--primary"
                loading={this.props.isFetching}>
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

export const CodeForm = (ConnectedCodeForm as unknown) as React.ComponentType<
  OwnProps
>;
