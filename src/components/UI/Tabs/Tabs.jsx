import React from 'react';
import PropTypes from 'prop-types';

import CN from 'classnames';
import classes from './Tabs.scss';

import Tab from './Item/Item';

const tabsList = ({ tabs, classNames }) => {
  const elements = Object.keys(tabs).map(item => <Tab text={tabs[item]} route={item} key={item} />);
  const parentClasses = classNames.map(item => classes[item]);

  return (
    <div className={CN(classes.Tabs, ...parentClasses)}>
      <ul className={classes.navbar}>
        {elements}
      </ul>
    </div>
  );
};

tabsList.propTypes = {
  tabs: PropTypes.shape.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
};

tabsList.defaultProps = {
  classNames: '',
};

export default tabsList;
