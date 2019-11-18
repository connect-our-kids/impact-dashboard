import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//auth
import { Auth0Provider } from "./auth0-wrapper";
import config from './auth_config.json';

// mixpanel
import { MixpanelProvider } from "react-mixpanel";

//redux/router
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/index'

import * as serviceWorker from './serviceWorker';

export let redirectUri = window.location.origin;
let baseName = "/";
if (process.env.NODE_ENV === 'production') {
  redirectUri = `${window.location.origin}/${process.env.REACT_APP_STAGE}/`;
  baseName = `/${process.env.REACT_APP_STAGE}/`;
}

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <Router basename={baseName}>
        <App />
      </Router>
    </Auth0Provider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
