import React from 'react';
import classes from './Albums.module.scss';
import Plus from '../../../../../svg/Plus';

const Albums = () => {
  return (
    <div>
      <div className={classes.albumsTitle}>
        <div className={classes.albumsText}>
            <span className={classes.albumsTitleText}>
              albums
            </span>
          <Plus/>
        </div>
      </div>
      <div>
        <ul className={classes.lists}>
          <li className={classes.listItem}>
            <a href='/#' className={classes.listLink}>
              Subcarpathia 2020
            </a>
          </li>
          <li className={classes.listItem}>
            <a href='/#' className={classes.listLink}>
              Summer 2018
            </a>
          </li>
          <li className={classes.listItem}>
            <a href='/#' className={classes.listLink}>
              Aspen 2015
            </a>
          </li>
          <li className={classes.listItem}>
            <a href='/#' className={classes.listLink}>
              Croatia 2015
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Albums;