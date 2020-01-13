import React from 'react';
import classes from './Gallery.module.scss';
import Play from '../../svg/Play';
import Share from '../../svg/Share';
import Content from './Content';


const Gallery = ({ setShift, shift }) => {
  const shiftX = () => {
    setShift(0);
  };
  
  const shiftBack = () => {
    if (shift === 0) {
      setShift(-220);
    }
  };
  
  return (
    <section className={classes.gallery} onClick={shiftBack}>
      <div className={classes.burger} onClick={shiftX} />
      <Play />
      <Share />
      <Content />
    </section>
  )
};

export default Gallery;