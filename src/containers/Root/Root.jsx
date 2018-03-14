import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const root = ({ children }) => (
  <div className="Root">
    <h3>Root</h3>
    {children}
  </div>
);

root.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Mapping application state to component's properties
 * @param  {Object} state Application state
 * @return {Object} Mapped properties
 */
const mapStateToProps = state => ({
  currentUser: state.authorization.currentUser,
});

export default withRouter(connect(mapStateToProps)(root));
