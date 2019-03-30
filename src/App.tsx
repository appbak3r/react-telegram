import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import './assets/styles/main.scss';
import { bindActionCreators, Dispatch } from 'redux';
import { AppRoute } from './components/pages/AppRoute';
import { Login } from './components/pages/login/Login';
import { Messenger } from './components/pages/messenger/Messenger';
import { PrivateRoute } from './components/pages/PrivateRoute';
import { GetCountryCodeAction } from './store/app/actions';
import { AuthState } from './store/auth/reducer';
import { RootState } from './store/reducer';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    getCountryCode: GetCountryCodeAction
  }, dispatch);
};

const mapStateToProps = (state: RootState) => {
  return state.auth;
};

type OwnProps = {};

type DispatchProps = {
  getCountryCode: typeof GetCountryCodeAction,
};

type AppProps = OwnProps & Partial<DispatchProps> & Partial<AuthState>;

@(connect as any)(mapStateToProps, mapDispatchToProps, null, { pure: false })
export class App extends Component<AppProps> {
  constructor (props: AppProps) {
    super(props);
    
    props.getCountryCode && props.getCountryCode();
  }
  
  render (): React.ReactNode {
    return (
      <div className='rt-app'>
        <Switch>
          <AppRoute path={ '/login' } exact={ true } component={ Login }/>
          
          <PrivateRoute path='/' component={ Messenger }/>
        </Switch>
      </div>
    );
  }
}
