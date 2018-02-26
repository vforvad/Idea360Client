import React from 'react';
import { NavLink } from 'react-router-dom';


const item = (props) => (
  <li>
    <NavLink
      to={props.route}
      activeClassName="active">
      {props.text}
    </NavLink>
  </li>
);

export default item;
