import React, { useCallback, useEffect, useState } from 'react';
import classes from './AddPhotoFrame.module.scss';
import Button from '../../ui/Button/Button';

const AddPhotoFrame = ({ setShowHandler, addPhoto }) => {
  
  const [http, setHttp] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  
  const closeFrame = () => {
    setShowHandler(false);
  };
  
  
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 3000);
    }
  }, [error]);
  
  const httpHandler = useCallback(e => {
    setHttp(e.currentTarget.value);
  }, [http, setHttp]);
  
  
  const nameHandler = useCallback(e => {
    setName(e.currentTarget.value);
  }, [name, setName]);
  
  
  const submit = useCallback(e => {
    if ((e.key === 'Enter' || e.type === 'click') && http.trim()) {
      const regExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
      const isValid = regExp.test(http);
      if (isValid) {
        addPhoto(http, name);
        setHttp('');
        setName('');
      } else {
        setHttp('');
        setName('');
        setError(true);
      }
    }
  }, [http, name]);
  
  return (
    <div className={classes.photoAddFrame}>
      <div className={classes.frameContent}>
        <div className={classes.title}>Добавить новое фото</div>
        <div className={classes.frameText}>
          <div className={classes.group}>
            <input value={http} onChange={httpHandler} placeholder=' ' onKeyDown={submit} className={classes.frameInput}
                   type="text" />
            <span className={classes.bar} />
            <label className={classes.label}>Ссылка на фото</label>
            {error && <span className={classes.error}>Попробуйте другую ссылку</span>}
          </div>
          <div className={classes.group}>
            <input value={name} onChange={nameHandler} placeholder=' ' onKeyDown={submit} className={classes.frameInput}
                   type="text" />
            <span className={classes.bar} />
            <label className={classes.label}>Название (необязательно)</label>
          </div>
        </div>
        <Button text='Добавить' classN='photoFrameBtn' fn={submit} />
        <span className={classes.closeFramePhoto} onClick={closeFrame}>✖</span>
      </div>
    </div>
  )
};

export default AddPhotoFrame;