import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../store';

import App from '../App';
import authorization from './authorization';
import Root from '../containers/Root/Root';
import CompaniesList from '../containers/Companies/List/CompaniesList';

export default (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Redirect from="/" to="/companies" exact />
          {authorization}
          <Root>
            <Switch>
              <Route path="/companies" component={CompaniesList} />
            </Switch>
          </Root>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);
