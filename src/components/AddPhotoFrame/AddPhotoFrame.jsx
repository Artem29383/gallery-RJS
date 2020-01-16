import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './AddPhotoFrame.module.scss';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

const AddPhotoFrame = ({ setShowHandler, addPhoto }) => {
  
  const [http, setHttp] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [desc, setDesc] = useState('');
  const [keyWords, setKeyWords] = useState('');
  const frame = useRef();
  
  const closeFrame = e => {
    if (frame.current === e.target) {
      setShowHandler(false);
    }
  };
  
  
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(false), 3000);
    }
  }, [error]);
  
  const httpHandler = useCallback(e => {
    setHttp(e.currentTarget.value);
  }, [setHttp]);
  
  
  const nameHandler = useCallback(e => {
    setName(e.currentTarget.value);
  }, [setName]);
  
  
  const descHandler = useCallback(e => {
    setDesc(e.currentTarget.value);
  }, [setDesc]);
  
  const keyHandler = useCallback(e => {
    setKeyWords(e.currentTarget.value);
  }, [setKeyWords]);
  
  
  const submit = e => {
    if ((e.key === 'Enter' || e.type === 'click') && http.trim() && name.trim()) {
      // eslint-disable-next-line no-useless-escape
      const regExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
      const isValid = regExp.test(http);
      if (isValid) {
        addPhoto(http, name, desc, keyWords);
        setHttp('');
        setName('');
        setDesc('');
        setKeyWords('');
      } else {
        setHttp('');
        setName('');
        setDesc('');
        setKeyWords('');
        setError(true);
      }
    }
  };
  
  return (
    <div className={classes.frame} ref={frame} onClick={closeFrame}>
      <div className={classes.photoAddFrame}>
        <div className={classes.frameContent}>
          <div className={classes.title}>Добавить новое фото</div>
          <div className={classes.frameText}>
            <Input fn={submit} value={http} desc='Ссылка на фото' handler={httpHandler} classN='margin' />
            {error && <span className={classes.error}>Попробуйте другую ссылку</span>}
            <Input fn={submit} value={name} desc='Название' handler={nameHandler} classN='margin' />
            <Input fn={submit} value={desc} desc='Описание (необязательно)' handler={descHandler} classN='margin' />
            <Input fn={submit} value={keyWords} desc='Ключевые слова (необязательно)' handler={keyHandler}
                   classN='margin' />
          </div>
          <Button text='Добавить' classN='photoFrameBtn' fn={submit} />
          <span className={classes.closeFramePhoto}  onClick={() => setShowHandler(false)}>✖</span>
        </div>
      </div>
    </div>
  )
};

export default AddPhotoFrame;