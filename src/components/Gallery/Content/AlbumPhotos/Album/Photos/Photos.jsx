import React, { Fragment } from 'react';
import classes from './Photos.module.scss';
import PhotoItem from './PhotoItem';
import useSelector from '../../../../../../hooks/useSelector';
import {
  getAlbumsPhotosSelector,
  getDotsSelector
} from '../../../../../../models/gallery/selectors';
import useAction from '../../../../../../hooks/useAction';
import { ADD_PHOTO } from '../../../../../../models/gallery/action';

const Photos = ({ id }) => {
  const grid = useSelector(getDotsSelector);
  
  
  const albums = useSelector(getAlbumsPhotosSelector);
  const album = albums[id].albumPhotos.photos;
  const ids = albums[id].albumPhotos.ids;
  const photos = ids.map(id => <PhotoItem key={album[id].id} />);
  const addNewPhoto = useAction(ADD_PHOTO);
  
  const addPhoto = () => {
    const uniqId = Date.now();
    const date = new Date();
    const dateCreated = `${date.getDate()}.${date.getMonth() > 9 ? date.getMonth() : '0' + (date.getMonth()+1)}.${date.getFullYear()}`;
    const localTime = `${date.getHours()}:${date.getMinutes()}`;
    albums[id].albumPhotos.photos = {...albums[id].albumPhotos.photos, [uniqId] : {id: uniqId, img: 'gold', dateCreated, localTime}};
    albums[id].albumPhotos.ids.push(uniqId);
    addNewPhoto({albums, id});
  };
  

  
  
  
  const gridColumnSize = grid => {
    if (grid === '0') return `repeat(4, 1fr)`;
    if (grid === '1') return `repeat(3, 1fr)`;
    if (grid === '2') return `repeat(2, 1fr)`;
    if (grid === '3') return `repeat(1, 1fr)`;
  };
  
  const cssStyles = {
    gridTemplateColumns: gridColumnSize(grid)
  };
  return (
    <Fragment>
      <div className={classes.galleryPhoto} style={cssStyles}>
        {photos}
      </div>
        <div className={classes.add} onClick={addPhoto}>
          <span className={classes.plus}>+</span>
        </div>
    </Fragment>
  )
};

export default Photos;