import block from 'bem-cn';
import React, { ButtonHTMLAttributes, PureComponent } from 'react';
import classNames from 'classnames';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export class Button extends PureComponent<ButtonProps> {
  render () {
    const { className, ...restProps } = this.props;
    
    const bem = block('rt-button');
    
    const rootClassNames = classNames({
      [bem()]: true,
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
