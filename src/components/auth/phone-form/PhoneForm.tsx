import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';

import { Input } from '../../forms/input/Input';

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
              <h1>Enter phone number</h1>
              
              <Input name={ 'phone_number' }/>
              
              <button>submit</button>
            </form>
          );
        } }
      </Form>
    );
  }
}