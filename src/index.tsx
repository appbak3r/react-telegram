import React, { ComponentClass } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';

import { configureStore } from './store/configureStore';

const rootElement = document.getElementById('root');
const AppStore    = configureStore();

const render = (Component: ComponentClass) => {
  ReactDOM.render((
    <Provider store={ AppStore }>
      <Component/>
    </Provider>
  ), rootElement);
};

render(App);
