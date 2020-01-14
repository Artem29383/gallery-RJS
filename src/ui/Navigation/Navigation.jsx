import React from 'react';
import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const Navigation = ({ text, classN, path }) => {
  return (
    <NavLink
      to={path}
      className={classnames(classes.nav, classes[classN])}
    >
      {text}
    </NavLink>
  )
};

export default Navigation