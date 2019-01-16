import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import { Input } from '../../forms/input/Input';
import { LogoIcon } from '../../common/icons/LogoIcon';
import { Label } from '../../common/label/Label';

import './phone-form.scss';
import { Button } from '../../common/button/Button';

interface PhoneFormProps {
  onSubmit: (message: any) => void;
}

export class PhoneForm extends PureComponent<PhoneFormProps> {
  onSubmit = (values: any) => {
    this.props.onSubmit({
      '@type': 'setAuthenticationPhoneNumber',
      ...values,
    });
  };
  
  render () {
    return (
      <Form onSubmit={ this.onSubmit }>
        { ({ handleSubmit }) => {
          return (
            <form onSubmit={ handleSubmit } className='rt-phone-form'>
              <div className='rt-phone-form__header'>
                <LogoIcon className='rt-phone-form__logo'/>
                
                <div className='rt-phone-form__title'>
                  <FormattedMessage id={ 'components.phone-form.title' }
                                    defaultMessage={ 'Telegram' }/>
                </div>
                
                <div className='rt-phone-form__subtitle'>
                  <FormattedMessage id={ 'components.phone-form.subtitle' }
                                    defaultMessage={ 'Welcome to the web application' }/>
                </div>
              </div>
              
              
              <Label className='rt-phone-form__label'
                     title={ <FormattedMessage id={ 'components.phone-form.phone-number' }
                                               defaultMessage={ 'Your phone' }/> }>
                <Input name={ 'phone_number' }/>
              </Label>
              
              <Button className='rt-button--primary'>
                <FormattedMessage id={ 'components.phone-form.submit' }
                                  defaultMessage={ 'Next' }/>
              </Button>
            </form>
          );
        } }
      </Form>
    );
  }
}