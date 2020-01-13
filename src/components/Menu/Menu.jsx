import React from 'react';
import classes from './Menu.module.scss';
import Profile from './Profile/Profile';
import Settings from './Settings';
import Zoomer from './Zoomer';

const Menu = ({ shift, menu }) => {
  return (
    <div
      ref={menu}
      className={classes.menuWrapper}
      style={((shift || shift === 0)
        ? { transform: `translateX(${shift}px` }
        : null)}
    >
      <div className={classes.menu}>
        <Profile />
        <Settings />
      </div>
      <Zoomer />
    </div>
  )
};

export default Menu;