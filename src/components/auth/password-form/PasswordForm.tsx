import React, { PureComponent } from "react";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { CheckPasswordAction } from "../../../store/auth/actions";
import { AuthState } from "../../../store/auth/reducer";
import { RootState } from "../../../store/reducer";
import { Input } from "../../forms/input/Input";

type FormValues = {
  password?: string;
};

type OwnProps = {};

type StateProps = AuthState;

type DispatchProps = {
  checkPassword: typeof CheckPasswordAction;
};

type PasswordFormProps = OwnProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState) => {
  return state.auth;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      checkPassword: CheckPasswordAction
    },
    dispatch
  );
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedPasswordForm extends PureComponent<PasswordFormProps> {
  onSubmit = ({ password }: FormValues) => {
    if (password) {
      this.props.checkPassword(password);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="rt-password-form">
              <h1>Enter password</h1>

              <Input name={"password"} type={"password"} />

              <button>submit</button>
            </form>
          );
        }}
      </Form>
    );
  }
}

export const PasswordForm = (ConnectedPasswordForm as unknown) as React.ComponentType<
  OwnProps
>;
