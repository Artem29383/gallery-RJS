import React from 'react';
import classes from './PhotoItem.module.scss';


const PhotoItem = ({ img, date, localeTime, name }) => {
  return (
    <div className={classes.galleryPhotoItem}>
      <div className={classes.photoItem}>
        <img src={img} className={classes.albumPhotoItem} />
        <div className={classes.photoItemInfo}>
          <div>{localeTime}</div>
          <div>{name}</div>
        </div>
      </div>
      <div className={classes.photoDataPublication}>
        {date}
      </div>
    </div>
  )
};

export default PhotoItem;