import React from 'react';
import classes from './Search.module.scss';

const Search = () => (
  <div>
    <input
      type="text"
      className={classes.searchFiles}
      placeholder="Search files"
    />
  </div>
);

export default Search