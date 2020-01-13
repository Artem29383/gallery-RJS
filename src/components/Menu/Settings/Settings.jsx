import React from 'react';
import classes from './Settings.module.scss';
import Search from './Search';
import Categories from './Categories';

const Settings = () => {
  return (
    <div className={classes.settings}>
      <Search/>
      <Categories/>
    </div>
  )
};

export default Settings;