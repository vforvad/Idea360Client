import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../store'

import App from '../App';
import authorization from './authorization';
import Root from '../containers/Root/Root';
import CompaniesList from '../containers/Companies/List/CompaniesList';

export default (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {authorization}
          <Route exact path="/">
            <Root>
              <Route component={CompaniesList} />
            </Root>
          </Route>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);
