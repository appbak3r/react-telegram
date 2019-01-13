import React, { Component } from 'react';

import { connect } from '../../../store/connect';
import { RootState } from '../../../store/reducers/rootReducer';
import { AppState } from '../../../store/reducers/appReducer';

import { LoginForm } from '../../auth/login-form/LoginForm';
import { TelegramActions, sendMessage } from '../../../store/actions/telegramActions';
import { bindActionCreators } from 'redux';

@connect<AppState, TelegramActions>(mapStateToProps, mapDispatchToProps)
class LoginWrapper extends Component<AppState & TelegramActions> {
  render () {
    const { authState, sendMessage } = this.props;
    
    return (
      <div className='rt-login'>
        <LoginForm state={ authState }
                   onSubmit={ sendMessage }/>
        
      </div>
    );
  }
}

function mapDispatchToProps (dispatch: any) {
  return bindActionCreators({ sendMessage }, dispatch);
}

function mapStateToProps (state: RootState): AppState {
  return state.app;
}

export const Login: React.ComponentType = LoginWrapper as any;