import React from 'react';

import classes from './Input.scss';

const input = (props) => {
  let label = null;
  let errors = null;

  if (props.label) {
    label = (
      <label>{props.label}</label>
    );
  }

  if (props.errors) {
    errors = (
      <div className={classes.errors}>
        {props.errors.join('\n')}
      </div>
    );
  }

  return (
    <div>
      {label}
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        className={classes[props.className]}
        onChange={props.onChange} />
      {errors}
    </div>
  );
};

export default input;
