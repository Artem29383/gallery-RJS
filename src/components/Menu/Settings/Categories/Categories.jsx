import React from 'react';
import classes from './Categories.module.scss';
import Albums from './Albums';

const Categories = () => {
  return (
    <div>
      <div className={classes.title}>
        categories
      </div>
      <nav>
        <ul className={classes.options}>
          <li className={classes.optionsItem}>
            <a href='/#' className={classes.optionsLink}>
              Photos
            </a>
          </li>
          <li className={classes.optionsItem}>
            <a href='/#' className={classes.optionsLink}>
              Videos
            </a>
          </li>
          <li className={classes.optionsItem}>
            <a href='/#' className={classes.optionsLink}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
      
      <Albums/>
      
    </div>
  )
};

export default Categories
