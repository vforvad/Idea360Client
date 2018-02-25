import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Authorization from '../containers/Authorization/Authorization';
import SignIn from '../components/Authorization/SignIn/SignIn';
import SignUp from '../components/Authorization/SignUp/SignUp';

export default (
  <Route>
    <Authorization>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Redirect to="/sign-in" />
      </Switch>
    </Authorization>
  </Route>
);
