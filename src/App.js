import React, { Component } from 'react';
import classes from './App.scss';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { currentUser } from 'actions/authorization';

import PropTypes from 'prop-types';

class App extends Component {

  componentWillMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(props) {
    console.log(props)
    if (props.currentUser) {
      this.props.history.replace('/companies');
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

/**
 * Mapping application state to component's properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
const mapStateToProps = (state) => {
  return {
    currentUser: state.authorization.currentUser
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
