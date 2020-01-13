import React from 'react';
import classes from './AlbumPhotos.module.scss';
import PhotoItem from './PhotoItem';
import useSelector from '../../../../../hooks/useSelector';
import { getAlbumsPhotosSelector, getDotsSelector } from '../../../../../models/gallery/selectors';

const AlbumPhotos = ({id}) => {
  const grid = useSelector(getDotsSelector);
  
  
  
  const albums = useSelector(getAlbumsPhotosSelector);
  const album = albums[id].albumPhotos.photos;
  const ids = albums[id].albumPhotos.ids;
  
  const photos = ids.map(id => <PhotoItem key = {album[id].id}/>);
  
  
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
    <div className={classes.galleryPhoto} style={cssStyles}>
      {photos}
    </div>
  )
};

export default AlbumPhotos;