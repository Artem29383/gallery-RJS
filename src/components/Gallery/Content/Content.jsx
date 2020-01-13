import React, { Fragment } from 'react';
import Album from './Album';
import useSelector from '../../../hooks/useSelector';
import { getAlbumsIdsSelector, getAlbumsPhotosSelector } from '../../../models/gallery/selectors';

const Content = () => {
  const albums = useSelector(getAlbumsPhotosSelector);
  const ids = useSelector(getAlbumsIdsSelector);
  const id = ids.filter(id => albums[id].isActive).length === 0 ? false : ids.filter(id => albums[id].isActive);
  return (
    <Fragment>
      {id
        ? <Album id={id} name={albums[id].name} year={albums[id].year} countPhotos={albums[id].countPhotos} />
        : null
      }
    </Fragment>
  )
};

export default Content;