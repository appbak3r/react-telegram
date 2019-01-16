import React from 'react';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
  name: string;
  mask: string;
  value?: string;
  type?: string;
  validate?: (value: string) => boolean;
  className?: string;
  placeholder?: string;
  onChange?: (currentValue: string) => void;
  onBlur?: (event: any) => void;
  disabled?: boolean;
  error?: string;
}

const validateMask = (value: string) => {
  if (!value || value.indexOf('_') > -1) {
    return 'default';
  }
  
  return false;
};

export class MaskedInput extends React.PureComponent<MaskedInputProps> {
  render () {
    const { error, name, validate, className, type, mask, disabled, placeholder } = this.props;
    
    return (
      <Field name={ name }
             validate={ validate || validateMask }>
        { ({ input, meta }) => {
          const hasError = (meta.error && meta.touched) || (meta.submitError && !meta.dirtySinceLastSubmit);
          
          const onChange = (event: any) => {
            input.onChange(event);
            
            this.onChange(event);
          };
          
          const onBlur = (event: any) => {
            input.onBlur(event);
            
            this.onBlur(event);
          };
          
          const inputClassNames = classNames({
            'rt-input': true,
            'rt-input--has-error': hasError,
          });
          
          return (
            <div className={ inputClassNames }>
              <InputMask { ...input }
                         className={ ['rt-input__input', className].join(' ') }
                         mask={ mask }
                         onChange={ onChange }
                         alwaysShowMask={ true }
                         type={ type }
                         onBlur={ onBlur }
                         name={ name }
                         disabled={ disabled }
                         placeholder={ placeholder }/>
              
              { hasError &&
              <div className='rt-input__error'>
                { error }
              </div>
              }
            </div>
          );
        }
        }
      </Field>
    );
  }
  
  private onChange = (event: any) => {
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
  };
  
  private onBlur = (event: any) => {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };
}
