import React, { Fragment } from 'react';
import useSelector from '../../../../hooks/useSelector';
import {
  getAlbumsIdsSelector,
  getAlbumsPhotosSelector
} from '../../../../models/gallery/selectors';
import Album from './Album';
import {
  Redirect,
  useParams
} from 'react-router-dom';


const AlbumPhotos = () => {
  const albums = useSelector(getAlbumsPhotosSelector);
  const id = useParams().id;
  const ids = useSelector(getAlbumsIdsSelector);
  return (
    <Fragment>
      {(ids.includes(+id) && albums[id].albumPhotos.hasOwnProperty('ids'))
        ? <Album
          id={id}
          name={albums[id].name}
          year={albums[id].year}
          countPhotos={albums[id].albumPhotos.ids.length}
        />
        : <Redirect to = '/photos'/>
      }
    </Fragment>
  )
};



export default AlbumPhotos;