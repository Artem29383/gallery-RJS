import React from 'react';
import classes from './StartPage.module.scss';
import Navigation from '../../ui/Navigation/Navigation';

const StartPage = () => {
  return (
    <div className={classes.newAlbum}>
      <div className={classes.info}>
        <div className={classes.title}>
          <span className={classes.welcome}>Раздел фото</span>
          Выберите существующий альбом или создайте новый.
        </div>
        <Navigation  text='Создать альбом' classN='btns' path = '/photos/create'/>
      </div>
    </div>
  )
};

export default StartPage;