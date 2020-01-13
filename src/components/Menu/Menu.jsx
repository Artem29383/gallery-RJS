import React from 'react';
import classes from './Menu.module.scss';
import Profile from './Profile/Profile';
import Settings from './Settings';
import Zoomer from './Zoomer';

const Menu = ({shift}) => {
  return (
    <div className={classes.menuWrapper} style={{transform: `translateX(${shift}px`}}>
      <div className={classes.menu}>
      <Profile/>
      <Settings/>
      </div>
      <Zoomer/>
    </div>
  )
};

export default Menu;