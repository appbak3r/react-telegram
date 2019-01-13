import React, { Component } from 'react';
import { Switch } from 'react-router';

import { Messenger } from './components/pages/messenger/Messenger';
import { Login } from './components/pages/login/Login';

import './assets/styles/main.scss';

import { PrivateRoute } from './components/pages/PrivateRoute';
import { AppRoute } from './components/pages/AppRoute';

export class App extends Component {
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
