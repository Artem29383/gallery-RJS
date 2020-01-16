import {
  normalize,
  schema
} from 'normalizr';
import {
  ADD_PHOTO, CHANGE_ALBUM_NAME,
  CREATE_NEW_ALBUM,
  NORMALIZE_ALBUM_PHOTO, REMOVE_ALBUM,
  SET_INIT, SET_SEARCH, SET_SIZE_PHOTO
} from './action';
import deepCopy from '../../utils/deepCopy';
import { albumsNormalizr } from '../../utils/normalizr';
import { removePropFromObject } from '../../utils/removePropFromObject';
import { removeArrayElement } from '../../utils/removeArrayElement';


const { albums, ids } = albumsNormalizr();

const initialState = {
  photos: {
    albums, ids
  },
  videos: {},
  projects: {},
  sizeAlbums: 0,
  search: {
    str: '',
    searchArea: ''
  },
  init: false
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case NORMALIZE_ALBUM_PHOTO: {
      const id = action.payload;
      const { albums, ids } = deepCopy(state.photos);
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
      const { albums, ids } = deepCopy(state.photos);
      albums[id] = { id, year, name, countPhotos: 0, albumPhotos: [], isActive: false };
      ids.push(id);
      return {
        ...state,
        photos: {
          albums, ids
        }
      };
    }
    
    
    case REMOVE_ALBUM: {
      const { albums, ids } = deepCopy(state.photos);
      return {
        ...state,
        photos: {
          ...state.photos,
          albums: removePropFromObject(albums, action.payload),
          ids: removeArrayElement(ids, action.payload)
        }
      };
    }
    
    
    case ADD_PHOTO: {
      const { albums } = action.payload;
      const ids = deepCopy(state.photos.ids);
      
      return { ...state, photos: { albums, ids } };
    }
    
    
    case CHANGE_ALBUM_NAME: {
      const { id, newName } = action.payload;
      const { albums, ids } = deepCopy(state.photos);
      albums[id].name = newName;
      return {
        ...state, photos: {
          albums, ids
        }
      };
    }
    
    case SET_SEARCH: {
      const { str, searchArea } = action.payload;
      return {
        ...state,
        search: {
          str, searchArea
        }
      }
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
      return state;
    }
  }
  
};

export default galleryReducer;