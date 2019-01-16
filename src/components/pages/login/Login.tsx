import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import { connect } from '../../../store/connect';
import { RootState } from '../../../store/reducers/rootReducer';
import { AppState, AUTHORIZATION_STATES } from '../../../store/reducers/appReducer';
import { TelegramActions, sendMessage } from '../../../store/actions/telegramActions';

import { LoginForm } from '../../auth/login-form/LoginForm';

import './login.scss';

@connect<AppState, TelegramActions>(mapStateToProps, mapDispatchToProps)
class LoginWrapper extends Component<AppState & TelegramActions> {
  render () {
    const { authState, sendMessage } = this.props;
    
    if (this.props.authState === AUTHORIZATION_STATES.AUTHORIZED) {
      return <Redirect to={ '/' }/>;
    }
    
    return (
      <div className='rt-login'>
        <FormattedMessage id={ 'common.pages.login.title' }
                          defaultMessage={ 'Telegram | Sign in' }>
          {
            title => (
              <Helmet>
                <title>{ title }</title>
              </Helmet>
            )
          }
        </FormattedMessage>
        
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