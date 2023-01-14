import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Options from '../Options/Options'
import Button from '@mui/material/Button';
import Map from '../Map/Map'
import './MapUI.css'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import IconButton from '@mui/material/IconButton';
import { forwardGeocode, geocodeQuery } from '../../apiCalls/Geocode'
import TimeMenu from '../Menu/TimeMenu.jsx'
import IconMenu from '../Menu/IconMenu.jsx'

export default function MapUI() {
  const [searchInput, setSearchInput] = useState('')
  const [searchGeoJson, setSearchGeoJson] = useState(null)
  const [time, setTime] = useState('60')
  const [profile, setProfile] = useState('car')
  
  return (
    <main>
      <Map searchGeoJson={ searchGeoJson }/>
      <form className='searchbar'>
        <input background-color='white' className='search-input' type='text' name='searchbar' placeholder='Search for address' value={searchInput} onChange={event => setSearchInput(event.target.value)} />
        <IconButton type='submit' size='large' color="primary" aria-label="search picture" component="label" onClick={() => {setSearchGeoJson(geocodeQuery(forwardGeocode(searchInput)))}}>
          <SearchTwoToneIcon />
        </IconButton>
        <div className='divider'></div>
        <IconButton id='favorite' size='large' color="primary" aria-label="search picture" component="label">
          <FavoriteTwoToneIcon />
        </IconButton>
      </form>
      <IconMenu />
      <TimeMenu />
      <div className='button-container'>
        <Button variant="contained" size='large' component={Link} to='/options'>VIEW SAVED</Button>
      </div>
    </main>
  )
}