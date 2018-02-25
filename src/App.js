import React, { Component } from 'react';
import classes from './App.scss';

import PropTypes from 'prop-types';

class App extends Component {
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

export default App;
