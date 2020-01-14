import React from 'react';
import classes from './AlbumInformation.module.scss';

const AlbumInformation = ({ name, year, countPhotos }) => {
  return (
    <div className={classes.galleryItemTitle}>
      <div className={classes.galleryItemName}>
        {name} {year}
      </div>
      <div className={classes.galleryItemPhotos}>
        (<span>{countPhotos}</span> photos)
      </div>
    </div>
  )
};

export default AlbumInformation;