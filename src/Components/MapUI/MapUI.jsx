import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Map from "../Map/Map"
import "./MapUI.css"
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import IconButton from "@mui/material/IconButton";
import { reverseGeocode, forwardGeocode, geocodeQuery } from "../../apiCalls/Geocode"
import TimeMenu from "../Menu/TimeMenu.jsx"
import IconMenu from "../Menu/IconMenu.jsx"

export default function MapUI({ saveData, setSaveData }) {
  const [searchInput, setSearchInput] = useState("")
  const [searchGeoJson, setSearchGeoJson] = useState(null)
  const [time, setTime] = useState("60")
  const [profile, setProfile] = useState("driving")
  const [currentPolygon, setCurrentPolygon] = useState(null)
  const [count, setCount] = useState(1)

  const saveCurrentPolygon = (currentPolygon, count, geocodeQuery, reverseGeocode) => {
    setCount((prevState) => {
      return prevState + 1
    })

    const address = geocodeQuery(reverseGeocode(currentPolygon.foreign.lng, currentPolygon.foreign.lat))

    address.then((data) => {
      let newPolygon = currentPolygon
      newPolygon.foreign.address = data.features[0].place_name;

      setSaveData((prevState) => [...prevState, newPolygon])
    })
  }

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
        saveData={ saveData }
      />
      <form className="searchbar">
        <input 
          background-color="white" 
          className="search-input" 
          type="text" name="searchbar" 
          placeholder="Search for address" 
          value={searchInput} 
          onChange={event => setSearchInput(event.target.value)} 
        />
        <IconButton 
          type="submit" 
          size="large" 
          color="primary" 
          aria-label="search picture" 
          component="label" 
          onClick={() => {setSearchGeoJson(geocodeQuery(forwardGeocode(searchInput)))}}
        >
          <SearchTwoToneIcon />
        </IconButton>
        <div className="divider"></div>
        <IconButton 
          id="favorite" 
          size="large" 
          color="primary" 
          aria-label="search picture" 
          component="label" 
          onClick={() => {
            saveCurrentPolygon(currentPolygon, count, geocodeQuery, reverseGeocode)
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
      <div className="button-container">
        <Button 
          variant="contained" 
          size="large"
          component={Link} to="/map/options/"
        >
          VIEW SAVED
        </Button>
      </div>
    </main>
  )
}