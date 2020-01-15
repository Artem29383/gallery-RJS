import React from 'react';
import classes from './Input.module.scss';
import classnames from 'classnames';

const Input = ({value, handler, fn, classN, desc}) => (
  <div className={classnames(classes.group, classes[classN])}>
    <input  value={value} onChange={handler} placeholder=' ' onKeyDown={fn} className={classes.frameInput}
           type="text" />
    <span className={classes.bar} />
    <label className={classes.label}>{desc}</label>
  </div>
);

export default Input;