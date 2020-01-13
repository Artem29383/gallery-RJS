import React from 'react';
import classes from './Album.module.scss';
import AlbumInformation from './AlbumInformation';
import AlbumPhotos from './AlbumPhotos';

const Album = () => {
  return (
    <div className={classes.galleryItem}>
      <AlbumInformation />
      <AlbumPhotos />
    </div>
  )
};

export default Album;