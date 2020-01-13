import React  from 'react';
import classes from './AlbumPhotos.module.scss';
import PhotoItem from './PhotoItem';

const AlbumPhotos = () => {
 /* const [grid, setGrid] = useState(4);
  
  const gridColumn = `repeat(${grid}, 1fr)`;
  const cssStyles = {
    gridTemplateColumns: gridColumn
  };
  */
  return (
    <div className={classes.galleryPhoto}>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
      <PhotoItem/>
    </div>
  )
};

export default AlbumPhotos;