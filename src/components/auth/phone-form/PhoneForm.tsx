import React, { PureComponent } from "react";
import { Form } from "react-final-form";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { SetPhoneNumberAction } from "../../../store/auth/actions";
import { AuthState } from "../../../store/auth/reducer";
import { RootState } from "../../../store/reducer";
import { Button } from "../../common/button/Button";
import { Logo } from "../../common/logo/Logo";
import { PhoneNumberInput } from "../../forms/phone-number-input/PhoneNumberInput";
import "./styles.scss";

type OwnProps = {};

type PhoneFormProps = AuthState & DispatchProps & OwnProps;

type DispatchProps = {
  setPhoneNumber: typeof SetPhoneNumberAction;
};

type FormValues = {
  phone?: string;
};

const mapStateToProps = (state: RootState): AuthState => {
  return state.auth;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      setPhoneNumber: SetPhoneNumberAction
    },
    dispatch
  );
};

@((connect as any)(mapStateToProps, mapDispatchToProps))
class ConnectedPhoneForm extends PureComponent<PhoneFormProps> {
  onSubmit = ({ phone }: FormValues) => {
    if (phone) {
      this.props.setPhoneNumber(phone);
    }
  };

  render() {
    const { isFetching } = this.props;

    return (
      <Form onSubmit={this.onSubmit}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} className="rt-phone-form">
              <div className="rt-phone-form__header">
                <Logo
                  title={
                    <FormattedMessage
                      id={"components.phone-form.subtitle"}
                      defaultMessage={"Welcome to the web application"}
                    />
                  }
                />
              </div>

              <div className="rt-phone-form__body">
                <PhoneNumberInput name={"phone"} />

                <Button
                  className="rt-phone-form__submit rt-button--primary"
                  loading={isFetching}>
                  <FormattedMessage
                    id={"components.phone-form.submit"}
                    defaultMessage={"Next"}
                  />
                </Button>
              </div>
            </form>
          );
        }}
      </Form>
    );
  }
}

export const PhoneForm = (ConnectedPhoneForm as unknown) as React.ComponentType<
  OwnProps
>;
