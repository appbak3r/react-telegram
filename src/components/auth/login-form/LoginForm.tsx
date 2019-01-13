import React, { PureComponent } from 'react';

interface LoginFormProps {
 state: string;
}

export class LoginForm extends PureComponent<LoginFormProps> {
  render () {
    return (
      <div className='rt-login-form'>
        {this.props.state}
      </div>
    );
  }
}