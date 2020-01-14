import React from 'react';
import classes from './Profile.module.scss';
import StandartUserPhoto from './../../../assets/standart_profile-user.png'
import Button from '../../../ui/Button/Button';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.userPhoto}>
        <img src={StandartUserPhoto} alt="user ava avatar gallery" className={classes.photo} />
      </div>
      <div className={classes.userName}>
        Amelia Rice
      </div>
      <div className={classes.userCountFiles}>
        2390 files
      </div>
      <Button text='upload'/>
    </div>
  )
};

export default Profile;