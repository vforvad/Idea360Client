import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../Tabs.scss';

const item = (props) => (
  <li>
    <NavLink
      to={props.route}
      activeClassName={classes.active}>
      {props.text}
    </NavLink>
  </li>
);

export default item;
