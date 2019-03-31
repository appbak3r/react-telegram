import block from "bem-cn";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, PureComponent } from "react";
import { SpinnerIcon } from "../icons/SpinnerIcon";
import "./styles.scss";

type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export class Button extends PureComponent<ButtonProps> {
  render() {
    const { className, loading, ...restProps } = this.props;

    const bem = block("rt-button");

    const rootClassNames = classNames({
      [bem.is({ loading: Boolean(loading) })]: true,
      [className as string]: className
    });

    return (
      <button {...restProps} className={rootClassNames}>
        {this.props.children}
        {loading && <SpinnerIcon className={bem("loading-icon")} />}
      </button>
    );
  }
}
