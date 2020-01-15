import { createSelector } from 'reselect';

const getAlbumsPhotos = state => {
  return state.gallery.photos.albums;
};

const getAlbumsId = state => {
  return state.gallery.photos.ids;
};

const getDots = state => {
  return state.gallery.sizeAlbums;
};


export const getAlbumsPhotosSelector = createSelector([getAlbumsPhotos], albums => albums);
export const getAlbumsIdsSelector = createSelector([getAlbumsId], ids => ids);
export const getDotsSelector = createSelector([getDots], sizeAlbums => sizeAlbums);
