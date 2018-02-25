import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
