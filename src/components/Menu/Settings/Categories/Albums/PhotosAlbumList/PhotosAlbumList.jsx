import React, { useEffect } from 'react';
import classes from './../Albums.module.scss';
import useSelector from '../../../../../../hooks/useSelector';
import {
  getAlbumsIdsSelector,
  getAlbumsPhotosSelector
} from '../../../../../../models/gallery/selectors';
import useAction from '../../../../../../hooks/useAction';
import { NORMALIZE_ALBUM_PHOTO, REMOVE_ALBUM } from '../../../../../../models/gallery/action';
import { saveToLocalStoragePhotos } from '../../../../../../utils/saveToLocalStorage';
import { NavLink } from 'react-router-dom';

const PhotosAlbumList = () => {
  
  const albums = useSelector(getAlbumsPhotosSelector);
  const ids = useSelector(getAlbumsIdsSelector);
  const normalizeAlbumPhoto = useAction(NORMALIZE_ALBUM_PHOTO);
  const removeAlbum = useAction(REMOVE_ALBUM);
  
  useEffect(() => {
    saveToLocalStoragePhotos({ albums, ids });
  }, [albums, ids]);
  
  const getChooseAlbum = (id) => {
    if (!albums[id].albumPhotos.hasOwnProperty('ids')) {
      normalizeAlbumPhoto(id);
    }
  };
  
  const remove = id => {
    removeAlbum(id);
  };
  
  return (
    <ul className={classes.lists}>
      {ids.map(id => {
        return (
          <li
            key={id}
            onClick={() => getChooseAlbum(id)}
            className={classes.listItem}
          >
            <NavLink
              to={`/photos/${id}`}
              className={classes.listLink}
              activeClassName={classes.active}
            >
              {albums[id].name}
            </NavLink>
            <NavLink to = '/photos' className={classes.remove} onClick={() => remove(id)}>✖</NavLink>
          </li>
        )
      })}
    </ul>
  )
};

export default PhotosAlbumList;