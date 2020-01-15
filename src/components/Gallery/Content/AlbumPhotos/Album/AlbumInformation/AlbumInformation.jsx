import React, { useCallback, useEffect, useState } from 'react';
import classes from './AlbumInformation.module.scss';
import useAction from '../../../../../../hooks/useAction';
import { CHANGE_ALBUM_NAME } from '../../../../../../models/gallery/action';

const AlbumInformation = ({ id, name, year, countPhotos }) => {
  const [edit, setEdit] = useState(false);
  const [albumName, setAlbumName] = useState(name);
  const changeAlbumName = useAction(CHANGE_ALBUM_NAME);
  
  useEffect(() => {
    setAlbumName(name);
  }, [id]);
  
  const changeHandler = useCallback(e => {
    setAlbumName(e.currentTarget.value);
  }, [albumName, setAlbumName]);
  
  const startEdit = () => {
    setEdit(true);
  };
  
  const stopEditBlur = () => {
    changeAlbumName({ id, newName: albumName });
    setEdit(false);
  };
  
  const stopEditKey = e => {
    if (e.key === 'Enter') {
      changeAlbumName({ id, newName: albumName });
      setEdit(false)
    }
    if (e.key === 'Escape') {
      setAlbumName(name);
      setEdit(false);
    }
  };
  
  return (
    <div className={classes.galleryItemTitle}>
      {edit
        ? <input className={classes.setName} onChange={changeHandler} value={albumName} type="text" autoFocus
                 onBlur={stopEditBlur}
                 onKeyDown={stopEditKey} />
        : <div className={classes.galleryItemName} onDoubleClick={startEdit}>
          {name} {year}
        </div>}
      <div className={classes.galleryItemPhotos}>
        (<span>{countPhotos}</span> photos)
      </div>
    </div>
  )
};

export default AlbumInformation;