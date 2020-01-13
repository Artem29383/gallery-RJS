import React from 'react';
import classes from './PhotoItem.module.scss';


const PhotoItem = () => {
  return (
    <div className={classes.galleryPhotoItem}>
      <div className={classes.photoItem}>
        <div className={classes.albumPhotoItem} />
        <div className={classes.photoItemInfo}>
          <div>5:40 PM</div>
          <div>f/8</div>
          <div>1/250</div>
          <div className={classes.iso}>iso 400</div>
        </div>
      </div>
      <div className={classes.photoDataPublication}>
        25.02.2020
      </div>
    </div>
  )
};

export default PhotoItem;