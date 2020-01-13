import React from 'react';
import classes from './AlbumInformation.module.scss';

const AlbumInformation = () => {
  return (
    <div className={classes.galleryItemTitle}>
      <div className={classes.galleryItemName}>
        Subcorpathia 2020
      </div>
      <div className={classes.galleryItemPhotos}>
        (<span>8</span> photos)
      </div>
    </div>
  )
};

export default AlbumInformation;