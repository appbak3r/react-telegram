import React, { PureComponent } from 'react';
import { Form } from 'react-final-form';
import { Input } from '../../forms/input/Input';

interface CodeFormProps {
  onSubmit: (message: any) => void;
}

export class CodeForm extends PureComponent<CodeFormProps> {
  onSubmit = (values: any) => {
    this.props.onSubmit({
      '@type': 'checkAuthenticationCode',
      ...values,
    });
  };
  
  sendViaSms = () => {
    this.props.onSubmit({
      '@type': 'resendAuthenticationCode',
    });
  };
  
  render () {
    return (
      <Form onSubmit={ this.onSubmit }>
        { ({ handleSubmit }) => {
          return (
            <form onSubmit={ handleSubmit } className='rt-code-form'>
              <h1>Enter code</h1>
              
              <Input name={ 'code' }/>
              
              <button type='button' onClick={ this.sendViaSms }>resend</button>
              
              <button>submit</button>
            </form>
          );
        } }
      </Form>
    );
  }
}
