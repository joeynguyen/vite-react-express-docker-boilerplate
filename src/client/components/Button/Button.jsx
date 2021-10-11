import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({ children }) {
  return <button className={classes.button}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
