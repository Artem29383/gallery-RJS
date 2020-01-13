import React from 'react';
import classes from './Zoomer.module.scss';
import useAction from '../../../hooks/useAction';
import { SET_SIZE_PHOTO } from '../../../models/gallery/action';
import useSelector from '../../../hooks/useSelector';
import { getDotsSelector } from '../../../models/gallery/selectors';


const Zoomer = () => {
  const setDots = useAction(SET_SIZE_PHOTO);
  const dots = useSelector(getDotsSelector);
  const array = new Array(25);
  const zoomerSmallItem = array
    .fill(1)
    .map((_, i) => <div key={i} className={classes.zoomerSmallItem} />);
  
  
  const onMoveDots = e => {
    setDots(e.target.value);
  };
  
  const setMaxRange = () => {
    setDots('3');
  };
  
  const setMinRange = () => {
    setDots('0');
  };
  
  
  const generateStyles = dots => {
    return {
      left: {
        left: `${dots * 33.3333}%`,
      },
      width: {
        width: `${dots * 33.3333}%`,
      },
    };
  };
  
  const cssStyle = generateStyles(dots);
  
  
  return (
    <div className={classes.zoomer}>
      <div className={classes.zoomerWrap}>
        <div
          className={classes.zommerIconSmall}
          onClick={setMinRange}
        >
          {zoomerSmallItem}
        </div>
        <div className={classes.zoomerSlider}>
          <input
            type="range"
            className={classes.inputRange}
            min='0'
            max='3'
            value={dots}
            onChange={onMoveDots}
          />
          <div
            className={classes.progressSliderLine}
            style={cssStyle.width}
          />
          <div
            className={classes.sliderDot}
            style={cssStyle.left}
          />
        </div>
        <div
          className={classes.zoomerIconBigger}
          onClick={setMaxRange}
        >
          <div className={classes.zoomerBiggerItem} />
          <div className={classes.zoomerBiggerItem} />
          <div className={classes.zoomerBiggerItem} />
          <div className={classes.zoomerBiggerItem} />
        </div>
      </div>
    </div>
  )
};

export default Zoomer;