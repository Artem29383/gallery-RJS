import React, { useState } from 'react';
import classes from './App.module.scss';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import favIcon from './assets/galleryPhoto/favicon.ico';
import Favicon from 'react-favicon';

const App = () => {
  
  const [shift, setShift] = useState(-220);
  
  return (
    <main className={classes.app}>
      <Favicon url={favIcon} />
      <Menu shift={shift} />
      <Gallery setShift={setShift} shift={shift} />
    </main>
  )
};

export default App;
