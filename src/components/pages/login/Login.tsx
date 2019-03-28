import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { LoginForm } from '../../auth/login-form/LoginForm';

import { AuthState } from '../../../store/auth/reducer';
import { RootState } from '../../../store/reducer';
import { SendMessageAction } from '../../../store/telegram/actions';

import './login.scss';

type OwnProps = {};
type DispatchProps = { sendMessage: typeof SendMessageAction };
type LoginProps = OwnProps & Partial<AuthState & DispatchProps>;

@(connect as any)(mapStateToProps, mapDispatchToProps)
export class Login extends Component<LoginProps> {
  render () {
    const { authState, isAuthorized, sendMessage } = this.props;
    
    if (isAuthorized) {
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

function mapDispatchToProps (dispatch: Dispatch) {
  return bindActionCreators({ sendMessage: SendMessageAction }, dispatch);
}

function mapStateToProps (state: RootState): AuthState {
  return state.auth;
}
