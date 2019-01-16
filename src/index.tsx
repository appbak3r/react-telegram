import React, { ComponentClass } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { App } from './App';
import { ConnectedIntlProvider, TextComponent } from './components/common/connected-intl-provider/ConnectedIntlProvider';

import { configureStore } from './store/configureStore';
import { AppHistory } from './config/appHistory';

const rootElement = document.getElementById('root');
const AppStore    = configureStore();

const render = (Component: ComponentClass) => {
  ReactDOM.render((
    <Provider store={ AppStore }>
      <ConnectedIntlProvider textComponent={ TextComponent }>
        <Router history={ AppHistory }>
          <Component/>
        </Router>
      </ConnectedIntlProvider>
    </Provider>
  ), rootElement);
};

render(App);
