import React, { useState } from 'react';
import classes from './CreateAlbum.module.scss';
import useAction from '../../hooks/useAction';
import { CREATE_NEW_ALBUM } from '../../models/gallery/action';
import { NavLink } from 'react-router-dom';
import Button from '../../ui/Button/Button';

const CreateAlbum = () => {
  const createHandler = useAction(CREATE_NEW_ALBUM);
  const [name, setName] = useState('');
  
  const createNewAlbum = e => {
    if ((e.key === 'Enter' || e.type === 'click') && name.trim()) {
      const data = new Date();
      createHandler({
        id: Date.now(),
        year: data.getFullYear(),
        name: name
      });
    }
  };
  
  const nameHandler = e => {
    setName(e.target.value);
  };
  
  return (
    <div className={classes.createNewAlbum}>
      <div className={classes.content}>
        <div className={classes.title}>
          Название альбома
          <NavLink
            className={classes.back}
            to='/photos'
          >
            ✖
          </NavLink>
        </div>
        <input
          type="text"
          className={classes.fieldForAlbum}
          placeholder='Название альбома. Например: Summer'
          value={name}
          autoFocus
          onChange={nameHandler}
          onKeyDown={createNewAlbum}
        />
        <Button text='создать' classN='createAlbum' fn={createNewAlbum}/>
      </div>
    </div>
  )
};

export default CreateAlbum;