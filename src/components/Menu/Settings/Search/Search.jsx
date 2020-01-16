import React, { useCallback, useState, useEffect } from 'react';
import classes from './Search.module.scss';
import { useHistory } from 'react-router-dom';
import useAction from '../../../../hooks/useAction';
import { SET_SEARCH } from '../../../../models/gallery/action';


const Search = () => {
  const [search, setSearch] = useState('');
  const [oldId, setOldId] = useState('');
  const history = useHistory();
  const sendSearch = useAction(SET_SEARCH);
  const isSearch = /\?search=([a-zA-Z|\w]+)/.test(history.location.search);
  const id = history.location.pathname.split('/')[2];
  const searchHandler = useCallback(e => {
    setSearch(e.currentTarget.value);
  }, [setSearch]);
  
  const submitSearch = e => {
    if (e.key === 'Enter' && search.trim() && id) {
      history.push(`/photos/${id}/?search=${search}`);
      sendSearch({ str: search.toLowerCase(), searchArea: id });
    } else if (e.key === 'Enter' && !search.trim() && id) {
      history.push(`/photos/${id}`);
      sendSearch({ str: '', searchArea: '' });
    }
  };
  
  useEffect(() => {
    if (!isSearch && search && id !== oldId) {
      sendSearch({ str: '', searchArea: '' });
      setSearch('');
    }
    setOldId(id);
  }, [isSearch, id, oldId, sendSearch, search]);
  
  useEffect(() => {
    if (id) {
      sendSearch({ str: '', searchArea: id })
    }
  }, [id, sendSearch]);
  
  return (
    <div>
      <input
        type="text"
        value={search}
        className={classes.searchFiles}
        placeholder="Search files"
        onChange={searchHandler}
        onKeyDown={submitSearch}
      />
    </div>
  )
};

export default Search