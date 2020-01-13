import {
  normalize,
  schema
} from 'normalizr';
import {
  CREATE_NEW_ALBUM,
  GET_CHOOSE_ALBUM,
  NORMALIZE_ALBUM_PHOTO,
  SET_INIT, SET_SIZE_PHOTO
} from './action';
import deepCopy from '../../utils/deepCopy';
import { albumsNormalizr } from '../../utils/normalizr';

const { albums, ids } = albumsNormalizr();

const initialState = {
  photos: {
    albums, ids
  },
  videos: {},
  projects: {},
  sizeAlbums: 0,
  init: false
};


/*const alb = {
  photos: {
  
  }
};

const id = 5;
alb.photos.photo = {1: {id: 1}};
alb.photos.photo = {...alb.photos.photo, 2: {id: 2}};
alb.photos.photo = {...alb.photos.photo, [id]: {id: 3}};
console.log(alb.photos);
*/


const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_CHOOSE_ALBUM: {
      const { id, isActive } = action.payload;
      const {albums, ids} = deepCopy(state.photos);
      ids.forEach(i => {
        i === id
          ? albums[i].isActive = !isActive
          : albums[i].isActive = false
      });
      
      return {
        ...state,
        photos: {
          albums, ids
        }
      }
    }
    
    
    case NORMALIZE_ALBUM_PHOTO: {
      const id = action.payload;
      const {albums, ids} = deepCopy(state.photos);
      const photosSchema = new schema.Entity('albumPhotos');
      const photoListSchema = [photosSchema];
      const dataNormalized = normalize(albums[id].albumPhotos, photoListSchema);
      albums[id].albumPhotos = {
        photos: dataNormalized.entities.albumPhotos,
        ids: dataNormalized.result
      };
      return {
        ...state, photos: { albums, ids }
      };
    }
    
    
    case CREATE_NEW_ALBUM: {
      const { id, year, name } = action.payload;
      const {albums, ids} = deepCopy(state.photos);
      albums[id] = { id, year, name, countPhotos: 0, albumPhotos: [], isActive: false };
      ids.push(id);
      return {
        ...state,
        photos: {
          albums, ids
        }
      };
    }
    
    
    case SET_SIZE_PHOTO: {
      return {
        ...state,
        sizeAlbums: action.payload
      };
    }
    
    
    case SET_INIT: {
      return { ...state, init: true }
    }
    
    
    default: {
      return { ...state };
    }
  }
  
};

export default galleryReducer;