import block from "bem-cn";
import React, { InputHTMLAttributes, PureComponent } from "react";
import { Field } from "react-final-form";
import PhoneInput from "react-phone-number-input";
import { connect } from "react-redux";
import { RootState } from "../../../store/reducer";
import { PhoneNumberCountrySelect } from "../phone-number-input-select/PhoneNumberCountrySelect";
import "./styles.scss";

type PhoneNumberInputProps = {
  name: string;
  validate?: (value: string) => any;
  errorMessage?: string;
  country?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const mapStateToProps = (state: RootState) => {
  return { country: state.app.countryCode };
};

@((connect as any)(mapStateToProps))
export class PhoneNumberInput extends PureComponent<PhoneNumberInputProps> {
  private ref = React.createRef<any>();

  componentDidMount(): void {
    this.ref.current && this.ref.current.input.focus();
  }

  render() {
    const { name, country } = this.props;

    const bem = block("rt-phone-number-input");

    return (
      <Field name={name}>
        {({ input }) => {
          return (
            <PhoneInput
              ref={this.ref}
              value={input.value}
              className={bem()}
              inputClassName={bem("input").toString()}
              international={false}
              country={country}
              onChange={input.onChange}
              countrySelectComponent={PhoneNumberCountrySelect as any}
            />
          );
        }}
      </Field>
    );
  }
}
