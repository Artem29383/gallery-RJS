import React, { useEffect, useRef, useState, Fragment } from 'react';
import classes from './App.module.scss';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import favIcon from './assets/galleryPhoto/favicon.ico';
import Favicon from 'react-favicon';
import useAction from './hooks/useAction';
import { SET_INIT } from './models/gallery/action';
import useSelector from './hooks/useSelector';
import { getInit } from './models/gallery/selectors';

const App = () => {
  const [shift, setShift] = useState(null);
  const setInit = useAction(SET_INIT);
  const isInit = useSelector(getInit);
  const menu = useRef();
  useEffect(() => {
    setInit();
  });
  
  return (
    <Fragment>
      {isInit ?
        <main className={classes.app}>
          <Favicon url={favIcon} />
          <Menu shift={shift} menu={menu} />
          <Gallery setShift={setShift} shift={shift} />
        </main>
        : null}
    </Fragment>
  )
};

export default App;
