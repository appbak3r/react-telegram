import React, { PureComponent } from 'react';

import { AUTHORIZATION_STATES } from '../../../store/reducers/appReducer';

import { PhoneForm } from '../phone-form/PhoneForm';
import { CodeForm } from '../code-form/CodeForm';
import { PasswordForm } from '../password-form/PasswordForm';

interface LoginFormProps {
  state: string;
  onSubmit: (message: any) => void;
}

export class LoginForm extends PureComponent<LoginFormProps> {
  render () {
    return (
      <div className='rt-login-form'>
        { this.renderForm() }
      </div>
    );
  }
  
  logout = () => {
    this.props.onSubmit({ '@type': 'logOut' });
  };
  
  renderForm (): React.ReactNode {
    const { state, onSubmit } = this.props;
    
    console.log(state);
    
    switch (state) {
      case AUTHORIZATION_STATES.PHONE_NUMBER: {
        return <PhoneForm onSubmit={ onSubmit }/>;
      }
      
      case AUTHORIZATION_STATES.CODE: {
        return <CodeForm onSubmit={ onSubmit }/>;
      }
      
      case AUTHORIZATION_STATES.PASSWORD: {
        return <PasswordForm onSubmit={ onSubmit }/>;
      }
      
      default: {
        return <div>
          { state }
          
          <button onClick={ this.logout }>Log out</button>
        </div>;
      }
    }
  }
}