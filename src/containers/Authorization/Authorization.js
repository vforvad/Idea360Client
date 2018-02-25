import CN from 'classnames';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Authorization.scss';
console.log(classes);

class Authorization extends Component {
  render() {
    return (
      <div className={CN(classes.Authorization)}>
        <div className={CN('card', classes.panel)}>
          <h3>Authorzation</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Authorization.propTypes = {
  children: PropTypes.node
};

export default Authorization;
