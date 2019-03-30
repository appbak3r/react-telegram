import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../common/button/Button';
import { Logo } from '../../common/logo/Logo';
import { PhoneNumberInput } from '../../forms/phone-number-input/PhoneNumberInput';
import './styles.scss';

type PhoneFormProps = {
  onSubmit: (message: any) => void;
}

type PhoneFormState = {}

export class PhoneForm extends PureComponent<PhoneFormProps, PhoneFormState> {
  onSubmit = (values: any) => {
    this.props.onSubmit({
      '@type': 'setAuthenticationPhoneNumber',
      phone_number: values.phone,
    });
  };
  
  render () {
    return (
      <Form onSubmit={ this.onSubmit }>
        { ({ handleSubmit }) => {
          return (
            <form onSubmit={ handleSubmit } className='rt-phone-form'>
              <div className='rt-phone-form__header'>
                <Logo title={ <FormattedMessage id={ 'components.phone-form.subtitle' }
                                                defaultMessage={ 'Welcome to the web application' }/> }/>
              </div>
              
              <div className='rt-phone-form__body'>
                <PhoneNumberInput name={ 'phone' }/>
  
                <Button className='rt-phone-form__submit rt-button--primary'>
                  <FormattedMessage id={ 'components.phone-form.submit' }
                                    defaultMessage={ 'Next' }/>
                </Button>
              </div>
            </form>
          );
        } }
      </Form>
    );
  }
}
