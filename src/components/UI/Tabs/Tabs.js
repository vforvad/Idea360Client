import CN from 'classnames';
import classes from './Tabs.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Item/Item';

class Tabs extends Component {

  render() {
    const { tabs, classNames } = this.props;
    const elements = Object.keys(tabs).map((item) => {
      return <Tab text={tabs[item]} route={item} key={item} />
    });
    const parentClasses = classNames.map(item => classes[item]);
    // console.log(classes, className, classes[className]);
    return (
      <div className={CN(classes.Tabs, ...parentClasses)}>
        <ul className={classes.navbar}>
          {elements}
        </ul>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.object.isRequired,
  classNames: PropTypes.array
};

export default Tabs;
