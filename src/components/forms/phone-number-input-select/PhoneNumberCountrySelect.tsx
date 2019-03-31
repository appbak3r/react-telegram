import block from "bem-cn";
import React, { PureComponent, SelectHTMLAttributes } from "react";
import Select from "react-select";

type Option = {
  value: string;
  label: string;
  icon: React.FunctionComponent<{ value: string }>;
};

type PhoneNumberCountrySelectProps = {
  name: string;
  onChange: (value: string | undefined) => void;
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const NO_COUNTRY = "ZZ";

export class PhoneNumberCountrySelect extends PureComponent<
  PhoneNumberCountrySelectProps
> {
  static defaultProps: Partial<PhoneNumberCountrySelectProps> = {
    value: NO_COUNTRY
  };

  onChange = (option: Option) => {
    const { onChange } = this.props;

    onChange(option.value === NO_COUNTRY ? undefined : option.value);
  };

  render() {
    const bem = block("rt-phone-number-country-select");

    const { value, options, onBlur, onFocus } = this.props;

    const fixedOptions = options.map((option: Option) => {
      return {
        ...option,
        value: option.value || NO_COUNTRY
      };
    });

    const selectedOption = fixedOptions.find(
      (option: Option) => option.value === value
    );

    return (
      <React.Fragment>
        {selectedOption &&
          React.createElement(selectedOption.icon, {
            value: selectedOption.value
          })}

        <div className={bem()}>
          <Select
            value={selectedOption}
            className={bem("select")}
            options={fixedOptions}
            onBlur={onBlur as any}
            onFocus={onFocus as any}
            onChange={this.onChange as any}
          />
        </div>
      </React.Fragment>
    );
  }
}
