import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CN from 'classnames';
import classes from './Authorization.scss';

import Tabs from '../../components/UI/Tabs/Tabs';

class Authorization extends Component {
  componentWillReceiveProps(props) {
    if (props.currentUser) {
      this.props.history.replace('/companies');
    }
  }

  render() {
    const tabs = {
      '/auth/sign-in': 'Sign in',
      '/auth/sign-up': 'Sign up',
    };

    return (
      <div className={CN(classes.Authorization)}>
        <div className={CN('card', classes.panel)}>
          <h3>Authorzation</h3>
          <Tabs tabs={tabs} classNames={['horizontal-underlined', 'space-around']} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

Authorization.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  currentUser: PropTypes.shape({}),
};

Authorization.defaultProps = {
  children: [],
  currentUser: {},
};

/**
 * Mapping application state to component's properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
const mapStateToProps = state => ({
  currentUser: state.authorization.currentUser,
});

export default withRouter(connect(mapStateToProps)(Authorization));
