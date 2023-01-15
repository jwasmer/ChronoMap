import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Map from '../Map/Map'
import './MapUI.css'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import IconButton from '@mui/material/IconButton';
import { reverseGeocode, forwardGeocode, geocodeQuery } from '../../apiCalls/Geocode'
import TimeMenu from '../Menu/TimeMenu.jsx'
import IconMenu from '../Menu/IconMenu.jsx'

export default function MapUI() {
  const [searchInput, setSearchInput] = useState('')
  const [searchGeoJson, setSearchGeoJson] = useState(null)
  const [time, setTime] = useState('60')
  const [profile, setProfile] = useState('driving')
  const [savedAddresses, setSavedAddresses] = useState([])
  const [currentPolygon, setCurrentPolygon] = useState(null)
  const [count, setCount] = useState(1)

  const saveCurrentPolygon = (currentPolygon, count, geocodeQuery, reverseGeocode, savedAddresses) => {
    setCount(count + 1)
    
    let polyForUpdate = currentPolygon

    const address = geocodeQuery(reverseGeocode(currentPolygon.foreign.lngLat))

    address.then((data) => {
      polyForUpdate.foreign.address = data.features[0].place_name;

      setSavedAddresses((prevState) => [...prevState, polyForUpdate])
    })
  }

  useEffect(() => {
    console.log(savedAddresses)
  }, [savedAddresses])

  return (
    <main>
      <Map  
        setSearchGeoJson={ setSearchGeoJson } 
        setCurrentPolygon={ setCurrentPolygon } 
        searchGeoJson={ searchGeoJson }
        profile={ profile } 
        time={ time } 
        currentPolygon={ currentPolygon }
        count={ count }
      />
      <form className='searchbar'>
        <input 
          background-color='white' 
          className='search-input' 
          type='text' name='searchbar' 
          placeholder='Search for address' 
          value={searchInput} 
          onChange={event => setSearchInput(event.target.value)} 
        />
        <IconButton 
          type='submit' 
          size='large' 
          color="primary" 
          aria-label="search picture" 
          component="label" 
          onClick={() => {setSearchGeoJson(geocodeQuery(forwardGeocode(searchInput)))}}
        >
          <SearchTwoToneIcon />
        </IconButton>
        <div className='divider'></div>
        <IconButton 
          id='favorite' 
          size='large' 
          color="primary" 
          aria-label="search picture" 
          component="label" 
          onClick={() => {
            saveCurrentPolygon(currentPolygon, count, geocodeQuery, reverseGeocode, savedAddresses)
          }}
        >
          <FavoriteTwoToneIcon />
        </IconButton>
      </form>
      <IconMenu 
        setProfile={ setProfile } 
      />
      <TimeMenu 
        setTime={ setTime } 
      />
      <div className='button-container'>
        <Button 
          variant="contained" 
          size='large'
          component={Link} to='/options'
          state={{ setSavedAddresses, savedAddresses }}
        >
          VIEW SAVED
        </Button>
      </div>
    </main>
  )
}