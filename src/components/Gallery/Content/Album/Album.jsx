import React from 'react';
import classes from './Album.module.scss';
import AlbumInformation from './AlbumInformation';
import AlbumPhotos from './AlbumPhotos';

const Album = (props) => {
  return (
    <div className={classes.galleryItem}>
      <AlbumInformation {...props} />
      <AlbumPhotos id = {props.id}/>
    </div>
  )
};

export default Album;