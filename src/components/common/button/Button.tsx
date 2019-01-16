import React, { ButtonHTMLAttributes, PureComponent } from 'react';
import classNames from 'classnames';

import './button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export class Button extends PureComponent<ButtonProps> {
  render () {
    const { className, ...restProps } = this.props;
    
    const rootClassNames = classNames({
      'rt-button': true,
      [className as string]: className,
    });
    
    return (
      <button { ...restProps }
              className={ rootClassNames }>
        { this.props.children }
      </button>
    );
  }
}
