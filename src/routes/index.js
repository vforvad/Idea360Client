import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../store'

import App from '../App';

export default (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}></Route>
    </ConnectedRouter>
  </Provider>
);
