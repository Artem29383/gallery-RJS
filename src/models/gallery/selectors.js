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

const getSearch = state => {
  return state.gallery.search;
};


export const getSearchStr = createSelector([getSearch], str => str);





export const getFilteredItems = createSelector([getSearch, getAlbumsPhotos], (type, items) => {
  const ids = items[type.searchArea]?.albumPhotos.ids;
  const photos = items[type.searchArea]?.albumPhotos.photos;
  return ids?.filter(item => (photos[item].name.includes(type.str)));
});

export const getAlbumsPhotosSelector = createSelector([getAlbumsPhotos], albums => albums);
export const getAlbumsIdsSelector = createSelector([getAlbumsId], ids => ids);
export const getDotsSelector = createSelector([getDots], sizeAlbums => sizeAlbums);
