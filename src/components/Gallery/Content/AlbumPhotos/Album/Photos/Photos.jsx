import React, { useState } from 'react';
import classes from './Photos.module.scss';
import PhotoItem from './PhotoItem';
import useSelector from '../../../../../../hooks/useSelector';
import {
  getAlbumsPhotosSelector,
  getDotsSelector
} from '../../../../../../models/gallery/selectors';
import useAction from '../../../../../../hooks/useAction';
import { ADD_PHOTO } from '../../../../../../models/gallery/action';
import AddPhotoFrame from '../../../../../AddPhotoFrame';

const Photos = ({ id }) => {
  const [showHandler, setShowHandler] = useState(false);
  
  const grid = useSelector(getDotsSelector);
  const albums = useSelector(getAlbumsPhotosSelector);
  const album = albums[id].albumPhotos.photos;
  const ids = albums[id].albumPhotos.ids;
  const addNewPhoto = useAction(ADD_PHOTO);
  
  const getImg = (img, name, desc, keys) => {
/*
    setPicture({img, name, desc, keys, id});
*/
  };
  
  
  const photos = ids.map(idImg => <PhotoItem
    key={album[idImg].id}
    idAlbum={id}
    idImg={idImg}
    img={album[idImg].img}
    date={album[idImg].dateCreated}
    localeTime={album[idImg].localeTime}
    name={album[idImg].name}
    desc = {album[idImg].desc}
    keyWords = {album[idImg].keyWords}
    getImg={getImg}
  />);
  
  const addPhoto = (img, name, desc, keyWords) => {
    const uniqId = Date.now();
    const date = new Date();
    const dateCreated = `${date.getDate()}.${date.getMonth() > 9 ? date.getMonth() : '0' + (date.getMonth() + 1)}.${date.getFullYear()}`;
    const localeTime = `${date.getHours()}:${date.getMinutes()}`;
    albums[id].albumPhotos.photos = {
      ...albums[id].albumPhotos.photos,
      [uniqId]: { id: uniqId, img, dateCreated, localeTime, name, desc, keyWords }
    };
    albums[id].albumPhotos.ids.push(uniqId);
    addNewPhoto({ albums, id });
  };
  
  
  const gridColumnSize = grid => {
    if (grid === '0') return { gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(auto, 200px)' };
    if (grid === '1') return { gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(auto, 400px)' };
    if (grid === '2') return { gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: 'minmax(auto, 600px)' };
    if (grid === '3') return { gridTemplateColumns: 'repeat(1, 1fr)', gridAutoRows: 'minmax(auto, auto)' };
  };
  
  const cssStyles = gridColumnSize(grid);
  
  return (
    <div className={classes.galleryContent}>
      <div className={classes.galleryPhoto} style={cssStyles}>
        {photos}
      </div>
      <div className={classes.add} onClick={() => setShowHandler(true)}>
        <span className={classes.plus}>+</span>
      </div>
      {showHandler && <AddPhotoFrame setShowHandler={setShowHandler} addPhoto={addPhoto} />}
    </div>
  )
};

export default Photos;