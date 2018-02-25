import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, browserHistory, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../store'

import App from '../App';
import Authorization from '../containers/Authorization/Authorization';
import Root from '../containers/Root/Root';
import SignIn from '../components/Authorization/SignIn/SignIn';
import CompaniesList from '../containers/Companies/List/CompaniesList';

export default (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route>
            <Authorization>
              <Route path="/sign_in" component={SignIn} />
            </Authorization>
          </Route>
          <Route path="/companies">
            <Root>
              <Route component={CompaniesList}></Route>
            </Root>
          </Route>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
);
