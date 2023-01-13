import React, { useState, useEffect } from 'react'
import Map from '../Map/Map'
import './MapUI.css'

export default function MapUI() {
  const [search, setSearch] = useState('')
  
  return (
    <>
      <Map />
      <div className='searchbar'>
        <input type='text' name='searchbar' value={search} onChange={event => setSearch(event.target.value)} />
      </div>
    </>
  )
}