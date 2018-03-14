import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Root extends Component {

  render() {
    return (
      <div className="Root">
        <h3>Root</h3>
        {this.props.children}
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node
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

export default withRouter(connect(mapStateToProps)(Root));
