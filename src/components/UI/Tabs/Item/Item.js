import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from '../Tabs.scss';

const item = ({ route, text }) => (
  <li>
    <NavLink
      to={route}
      activeClassName={classes.active}
    >
      {text}
    </NavLink>
  </li>
);

item.defaultProps = {
  route: '',
  text: '',
};

item.propTypes = {
  route: PropTypes.string,
  text: PropTypes.string,
};

export default item;
