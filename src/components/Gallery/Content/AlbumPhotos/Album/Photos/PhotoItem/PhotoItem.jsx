import React from 'react';
import classes from './PhotoItem.module.scss';
import { NavLink } from 'react-router-dom';


const PhotoItem = ({ idAlbum, idImg, img, date, localeTime, name, desc, keyWords, getImg }) => {
  return (
    <NavLink to = {`/photos/${idAlbum}/photo/${idImg}`} className={classes.galleryPhotoItem} onClick={() => getImg(img, name, desc, keyWords )}>
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
    </NavLink>
  )
};

export default PhotoItem;