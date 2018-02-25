import React from 'react';
import { Route } from 'react-router';

import Authorization from '../containers/Authorization/Authorization';
import SignIn from '../components/Authorization/SignIn/SignIn';

export default (
  <Route path='/auth'>
    <Authorization>
      <Route path="/sign_in" component={SignIn} />
    </Authorization>
  </Route>
);
