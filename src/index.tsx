import React, { ComponentClass } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './App';

import { configureStore } from './store/configureStore';
import { AppHistory } from './config/appHistory';

const rootElement = document.getElementById('root');
const AppStore    = configureStore();

const render = (Component: ComponentClass) => {
  ReactDOM.render((
    <Provider store={ AppStore }>
      <Router history={ AppHistory }>
        <Component/>
      </Router>
    </Provider>
  ), rootElement);
};

render(App);
