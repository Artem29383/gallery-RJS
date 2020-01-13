import React, { useEffect } from 'react';
import classes from './../Albums.module.scss';
import classnames from 'classnames';
import useSelector from '../../../../../../hooks/useSelector';
import { getAlbumsIdsSelector, getAlbumsPhotosSelector } from '../../../../../../models/gallery/selectors';
import useAction from '../../../../../../hooks/useAction';
import { GET_CHOOSE_ALBUM, NORMALIZE_ALBUM_PHOTO } from '../../../../../../models/gallery/action';
import { saveToLocalStoragePhotos } from '../../../../../../utils/saveToLocalStorage';
import { NavLink } from 'react-router-dom';

const PhotosAlbumList = () => {
  
  const albums = useSelector(getAlbumsPhotosSelector);
  const ids = useSelector(getAlbumsIdsSelector);
  const activeHandler = useAction(GET_CHOOSE_ALBUM);
  const normalizeAlbumPhoto = useAction(NORMALIZE_ALBUM_PHOTO);
  
  useEffect(() => {
    saveToLocalStoragePhotos({albums, ids});
  }, [albums, ids]);
  
  const getChooseAlbum = (id, isActive) => {
    activeHandler({ id, isActive });
    if (!albums[id].albumPhotos.hasOwnProperty('ids')) {
      normalizeAlbumPhoto(id);
    }
  };
  
  return (
    <ul className={classes.lists}>
      {ids.map(id => {
        return (
          <li key={id} onClick={() => getChooseAlbum(id, albums[id].isActive)}
              className={classnames(classes.listItem, albums[id].isActive && classes.active)}>
            <NavLink to = {`/photos/${albums[id].name}`} className={classes.listLink}>
              {albums[id].name}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
};

export default PhotosAlbumList;