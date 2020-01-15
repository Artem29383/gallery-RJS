import React, { Fragment } from 'react';
import {
  NavLink,
  Redirect
} from 'react-router-dom';
import classes from './ImgInfo.module.scss';
import useSelector from '../../hooks/useSelector';
import { getAlbumsPhotosSelector } from '../../models/gallery/selectors';
import { useParams } from 'react-router-dom';

const ImgInfo = () => {
  
  const albums = useSelector(getAlbumsPhotosSelector);
  const params = useParams();
  const albumId = params.albumId;
  const imgId = params.imgId;
  const imgIds = albums[albumId].albumPhotos.ids;
  const pic = albums[albumId].albumPhotos.photos[imgId];
  
  
  return (
    <Fragment>
      {imgIds.includes(+imgId) && albums[albumId].albumPhotos.hasOwnProperty('ids')
        ? <div className={classes.imgInfo}>
          <div className={classes.frame}>
            <div className={classes.img}>
              <img className={classes.photo} src={pic.img} alt="" />
            </div>
            <div className={classes.info}>
              <div className={classes.title}>
                Название: {pic.name}
              </div>
              {pic.desc && <div className={classes.desc}>
                {pic.desc}
              </div>}
              <div className={classes.keyWords}>
                {pic.keyWords}
              </div>
              <NavLink to={`/photos/${albumId}`} className={classes.close}>✖</NavLink>
            </div>
          </div>
        </div>
        : <Redirect to={`/photos/${albumId}`} />
      }
    </Fragment>
  )
};

export default ImgInfo