import { normalize, schema } from 'normalizr';
import { getLocalStoragePhotos } from './getLocalStoragePhotos';


export const albumsNormalizr = () => {
  const albums = new schema.Entity('albums');
  const albumsList = { photos: [albums] };
  const localStorage = getLocalStoragePhotos();
  if (!localStorage.hasOwnProperty('ids')) {
    const albumsNormalizr = normalize(localStorage, albumsList);
    return { albums: albumsNormalizr.entities.albums, ids: albumsNormalizr.result.photos }
  }
  return localStorage;
};
