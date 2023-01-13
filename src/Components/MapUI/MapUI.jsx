import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Map from '../Map/Map'
import './MapUI.css'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import IconButton from '@mui/material/IconButton';

export default function MapUI() {
  const [search, setSearch] = useState('')
  
  const runSearch = (search, coordinates) => {
    
  }

  return (
    <main>
      <Map runSearch={runSearch} search={search}/>
      <div className=''></div>
      <form className='searchbar'>
        <input className='search-input' type='text' name='searchbar' placeholder='Search for address' value={search} onChange={event => setSearch(event.target.value)} />
        <IconButton type='submit' size='large' color="primary" aria-label="search picture" component="label" onClick={runSearch}>
          <SearchTwoToneIcon />
        </IconButton>
        <div className='divider'></div>
        <IconButton size='large' color="primary" aria-label="search picture" component="label">
          <FavoriteTwoToneIcon />
        </IconButton>
      </form>
      <div className='button-container'>
        <Button variant="contained" size='large'>VIEW SAVED</Button>
      </div>
    </main>
  )
}