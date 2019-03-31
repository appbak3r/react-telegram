import block from "bem-cn";
import React, { InputHTMLAttributes, PureComponent } from "react";
import { Field } from "react-final-form";
import "./styles.scss";

type InputProps = {
  name: string;
  validate?: (value: string) => any;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export class Input extends PureComponent<InputProps> {
  render(): React.ReactNode {
    const { name, errorMessage, validate, ...restProps } = this.props;

    const bem = block("rt-input");

    return (
      <Field name={name} validate={validate}>
        {({ input, meta }) => {
          const hasError = meta.touched && meta.error;

          return (
            <div className={bem()}>
              <input {...input} {...restProps} className={bem("input")} />

              {hasError && (
                <div className={bem("error")}>{errorMessage || meta.error}</div>
              )}
            </div>
          );
        }}
      </Field>
    );
  }
}
