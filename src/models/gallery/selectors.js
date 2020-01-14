import { createSelector } from 'reselect';

const getAlbumsPhotos = state => {
  return state.gallery.photos.albums;
};

const getAlbumsVideos = state => {
  return state.gallery.videos;
};

const getAlbumsProjects = state => {
  return state.gallery.projects;
};

const getAlbumsId = state => {
  return state.gallery.photos.ids;
};

const getDots = state => {
  return state.gallery.sizeAlbums;
};

export const getInit = state => {
  return state.gallery.init;
};

export const getAlbumsPhotosSelector = createSelector([getAlbumsPhotos], albums => albums);
export const getAlbumsIdsSelector = createSelector([getAlbumsId], ids => ids);
export const getDotsSelector = createSelector([getDots], sizeAlbums => sizeAlbums);
