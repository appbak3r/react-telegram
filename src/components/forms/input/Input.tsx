import React, { InputHTMLAttributes, PureComponent } from 'react';
import { Field } from 'react-final-form';

import './input.scss';

type InputProps = {
  name: string;
  validate?: (value: string) => any;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export class Input extends PureComponent<InputProps> {
  render (): React.ReactNode {
    const { name, errorMessage, validate, ...restProps } = this.props;
    
    return (
      <Field name={ name }
             validate={ validate }>
        { ({ input, meta }) => {
          const hasError = meta.touched && meta.error;
          
          return (
            <div className='rt-input'>
              <input { ...input }
                     { ...restProps }
                     className='rt-input__input'/>
              
              { hasError && (
                <div className='rt-input__error'>
                  { errorMessage || meta.error }
                </div>
              ) }
            </div>
          );
        } }
      </Field>
    );
  }
}
