import React, { Component } from 'react';
import classes from './App.scss';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { currentUser } from 'actions/authorization';

import { getToken } from 'utils/token';

import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount() {
    const token = getToken();

    if (token) {;
      this.props.onCurrentUser();
    } else {
      this.props.history.replace('/auth/sign-in');
    }
  }

  render() {
    return (
      <div className={classes.App}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

/**
 * Mapping dispatched functions to component's properties
 * @param  {Object} dispatch Application dispatch function
 * @return {Object} Mapped functions
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentUser: () => dispatch(currentUser())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
