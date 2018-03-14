import React from 'react';

import PropTypes from 'prop-types';

import classes from './Input.scss';
import Aux from '../../../hoc/Aux/Aux';

const input = ({
  label, errors, type, name, value, placeholder, className, onChange,
}) => {
  let labelEl = null;
  let errorsEl = null;

  if (label) {
    labelEl = (
      <label htmlFor={name}>{label}</label>
    );
  }

  if (errors) {
    errorsEl = (
      <div className={classes.errors}>
        {errors.join('\n')}
      </div>
    );
  }

  return (
    <Aux>
      {labelEl}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={classes[className]}
        onChange={onChange}
      />
      {errorsEl}
    </Aux>
  );
};

input.propTypes = {
  label: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

input.defaultProps = {
  label: null,
  errors: null,
  type: 'text',
  name: null,
  value: null,
  placeholder: null,
  className: '',
  onChange: () => {},
};

export default input;
