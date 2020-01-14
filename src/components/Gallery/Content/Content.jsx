import React, { Fragment } from 'react';
import AlbumPhotos from './AlbumPhotos/AlbumPhotos';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import StartPage from '../../StartPage';
import CreateAlbum from '../../CreateAlbum';

const Content = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' render={() => <h1>Добро пожаловать в галерею, здесь вы сможете размещать свои проекты, видео, фото и делиться ими</h1>}/>
        <Route exact path='/photos' component={StartPage}/>
        <Route exact path='/photos/create' component={CreateAlbum}/>
        <Route exact path='/photos/:id?'  component={AlbumPhotos} />
        <Route exact path='/videos/:id?' render={() => <h1>Videos</h1>} />
        <Route exact path='/projects/:id?' render={() => <h1>Projects</h1>} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  )
};

export default Content;