import CN from 'classnames';
import classes from './Tabs.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Item/Item';

class Tabs extends Component {

  render() {
    const { tabs, className } = this.props;
    const elements = Object.keys(tabs).map((item) => {
      return <Tab text={tabs[item]} route={item} key={item} />
    });
    console.log(classes, className, classes[className]);
    return (
      <div className={CN(classes.Tabs, classes[className])}>
        <ul className={classes.navbar}>
          {elements}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Tabs;
