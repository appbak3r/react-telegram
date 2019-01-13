import React, { Component } from 'react';

import { connect } from '../../../store/connect';
import { RootState } from '../../../store/reducers/rootReducer';
import { AppState } from '../../../store/reducers/appReducer';

import { LoginForm } from '../../auth/login-form/LoginForm';

@connect<AppState>(mapStateToProps)
class LoginWrapper extends Component<AppState> {
  render () {
    const { authState } = this.props;
    
    return (
      <div className='rt-login'>
        <LoginForm state={ authState }/>
      </div>
    );
  }
}

function mapStateToProps (state: RootState): AppState {
  return state.app;
}

export const Login: React.ComponentType = LoginWrapper as any;