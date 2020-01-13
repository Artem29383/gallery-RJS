import React  from 'react';
import classes from './Albums.module.scss';
import Plus from '../../../../../svg/Plus';
import PhotosAlbumList from './PhotosAlbumList';
import { Route } from 'react-router-dom';

const Albums = () => {
  return (
    <div>
      <div className={classes.albumsTitle}>
        <div className={classes.albumsText}>
            <span className={classes.albumsTitleText}>
              albums
            </span>
          <Plus />
        </div>
      </div>
      <div>
        <Route path='/photos' component={PhotosAlbumList} />
        <Route path='/videos' component={null} />
        <Route path='/projects' component={null} />
      </div>
    </div>
  )
};

export default Albums;