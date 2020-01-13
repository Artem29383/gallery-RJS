import React from 'react';
import classes from './Categories.module.scss';
import Albums from './Albums';
import {
  NavLink,
  Route
} from 'react-router-dom';

const Categories = () => {
  return (
    <div>
      <div className={classes.title}>
        categories
      </div>
      <nav>
        <ul className={classes.options}>
          <li className={classes.optionsItem}>
            <NavLink to='/photos' className={classes.optionsLink}>
              Photos
            </NavLink>
          </li>
          <li className={classes.optionsItem}>
            <NavLink to='/videos' className={classes.optionsLink}>
              Videos
            </NavLink>
          </li>
          <li className={classes.optionsItem}>
            <NavLink to='/projects' className={classes.optionsLink}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
      
      
      <Route path={['/photos', '/videos', '/projects']} component={Albums} />
    
    
    </div>
  )
};

export default Categories
