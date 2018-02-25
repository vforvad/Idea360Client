import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default Root;
