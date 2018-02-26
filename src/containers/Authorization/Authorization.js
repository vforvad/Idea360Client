import CN from 'classnames';
import classes from './Authorization.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tabs from '../../components/UI/Tabs/Tabs';

class Authorization extends Component {


  render() {
    const tabs = {
      '/sign-in': 'Sign in',
      '/sign-up': 'Sign up'
    };

    return (
      <div className={CN(classes.Authorization)}>
        <div className={CN('card', classes.panel)}>
          <h3>Authorzation</h3>
          <Tabs tabs={tabs} />
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
