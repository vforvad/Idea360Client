import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Item/Item';

class Tabs extends Component {

  render() {
    const tabs = this.props.tabs;
    console.log(tabs, Object.keys(tabs));
    const elements = Object.keys(tabs).map((item) => {
      console.log(item);
      return <Tab text={tabs[item]} route={item} key={item} />
    });

    return (
      <div className="tabs">
        <ul className="nav-bar">
          {elements}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.object.isRequired
};

export default Tabs;
