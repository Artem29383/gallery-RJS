import React, { useState } from 'react';
import classes from './CreateAlbum.module.scss';
import useAction from '../../hooks/useAction';
import { CREATE_NEW_ALBUM } from '../../models/gallery/action';
import { NavLink } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

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
      setName('');
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
        <div className={classes.gr}>
          <Input handler={nameHandler} value={name} classN='styleInput' fn={createNewAlbum} desc='Название альбома' />
          <Button text='создать' classN='createAlbum' fn={createNewAlbum} />
        </div>
      </div>
    </div>
  )
};

export default CreateAlbum;