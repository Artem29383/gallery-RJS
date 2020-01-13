import { combineReducers, createStore } from 'redux';
import galleryReducer from '../models/gallery/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';


const reducer = combineReducers(
  {
    gallery: galleryReducer
  }
);

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

export default store;