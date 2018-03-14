import React from 'react';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const item = ({ route, active, text }) => (
  <li>
    <NavLink
      to={route}
      activeClassName={active}
    >
      {text}
    </NavLink>
  </li>
);

item.defaultProps = {
  route: '',
  active: '',
  text: '',
};

item.propTypes = {
  route: PropTypes.string,
  active: PropTypes.string,
  text: PropTypes.string,
};

export default item;
