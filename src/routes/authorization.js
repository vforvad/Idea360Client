import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import Authorization from '../containers/Authorization/Authorization';
import SignIn from '../components/Authorization/SignIn/SignIn';
import SignUp from '../components/Authorization/SignUp/SignUp';

export default (
  <Route path="/auth">
    <Authorization>
      <Switch>
        <Route path="/auth/sign-in" component={SignIn} />
        <Route path="/auth/sign-up" component={SignUp} />
        <Redirect to="/auth/sign-in" />
      </Switch>
    </Authorization>
  </Route>
);
