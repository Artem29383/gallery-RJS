import React from 'react';
import classes from './Album.module.scss';
import AlbumInformation from './AlbumInformation';
import Photos from './Photos';

const Album = (props) => {
  return (
    <div className={classes.galleryItem}>
      <AlbumInformation {...props} />
      <Photos id={props.id} />
    </div>
  )
};

export default Album;