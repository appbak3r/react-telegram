import React, { PureComponent } from 'react';
import { Field } from 'react-final-form';
import ReactSelect from 'react-select';
import classNames from 'classnames';

import './select.scss';

interface SelectProps {
  name: string;
  options: any;
  placeholder?: string;
  className?: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
  error?: string;
  isSearchable?: boolean;
}

export class Select extends PureComponent<SelectProps> {
  static defaultProps = {
    isSearchable: false,
  };
  
  render () {
    const { name, options, placeholder, disabled, className, error, isSearchable } = this.props;
    
    return (
      <Field name={ name }>
        { ({ input, meta }) => {
          const hasError = (meta.error && meta.touched) || (meta.submitError && !meta.dirtySinceLastSubmit);
          
          const onChange = (selectedOption: any) => {
            input.onChange(selectedOption.value);
            
            this.onChange(selectedOption);
          };
          
          const selectedOption = this.getSelectedOption(input.value) || null;
          
          const rootClassNames = classNames({
            'rt-select': true,
            'rt-select--has-error': hasError,
            [className as string]: className,
          });
          
          return (
            <div className={ rootClassNames }>
              <ReactSelect { ...input }
                           classNamePrefix={ 'rt-select' }
                           className={ 'rt-select__container' }
                           options={ options }
                           value={ selectedOption }
                           onChange={ onChange }
                           placeholder={ placeholder }
                           isDisabled={ disabled }
                           components={ {
                             DropdownIndicator: null,
                           } }
                           isSearchable={ isSearchable }
                           isClearable={ false }/>
              { hasError && (
                <div className='rt-select__error'>
                  { error }
                </div>
              ) }
            </div>
          );
        } }
      </Field>
    );
  }
  
  private getSelectedOption = (value: any) => {
    const { options } = this.props;
    
    return options.find((option: any) => option.value === value || (value && value.toString() === option.value.toString()));
  };
  
  private onChange = (newValue: any) => {
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };
}
