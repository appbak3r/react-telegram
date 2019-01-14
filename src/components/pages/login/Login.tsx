import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';

import { connect } from '../../../store/connect';
import { RootState } from '../../../store/reducers/rootReducer';
import { AppState, AUTHORIZATION_STATES } from '../../../store/reducers/appReducer';
import { TelegramActions, sendMessage } from '../../../store/actions/telegramActions';

import { LoginForm } from '../../auth/login-form/LoginForm';

@connect<AppState, TelegramActions>(mapStateToProps, mapDispatchToProps)
class LoginWrapper extends Component<AppState & TelegramActions> {
  render () {
    const { authState, sendMessage } = this.props;
    
    if (this.props.authState === AUTHORIZATION_STATES.AUTHORIZED) {
      return <Redirect to={ '/' }/>;
    }
    
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