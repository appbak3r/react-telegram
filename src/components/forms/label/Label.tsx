import React, { PureComponent } from 'react';
import classNames from 'classnames';

import './label.scss';

interface LabelProps {
  title?: string | React.ReactNode;
  className?: string;
}

export class Label extends PureComponent<LabelProps> {
  render () {
    const { className, title } = this.props;
    
    const rootClassNames = classNames({
      'rt-label': true,
      [className as string]: className,
    });
    
    return (
      <label className={ rootClassNames }>
        { title && (
          <div className='rt-label__title'>
            { title }
          </div>
        ) }
        
        { this.props.children }
      </label>
    );
  }
}
