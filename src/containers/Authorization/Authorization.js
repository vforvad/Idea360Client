import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Authorization extends Component {
  render() {
    return (
      <div className="Authorization">
        <h3>Authorzation</h3>
        {this.props.children}
      </div>
    );
  }
}

Authorization.propTypes = {
  children: PropTypes.node
};

export default Authorization;
