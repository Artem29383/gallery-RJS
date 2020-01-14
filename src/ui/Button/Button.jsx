import React from 'react';
import classes from './Button.module.scss';
import classnames from 'classnames';

const Button = ({ text, classN, fn }) => (
  <button
    className={classnames(classes.btn, classes[classN])}
    onClick={fn}
  >
    {text}
  </button>
);

export default Button;