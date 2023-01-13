import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { ReactDOM, useState, useEffect, useRef } from 'react';
import './Map.css'
import { featureCollectionTemplate, featureTemplate, symbolLayer, buildFeature, updateFeatureCollection } from './MapboxHelpers';

mapboxgl.accessToken = 'pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw' // how to hide this?

export default function Map() {
  const [coordinates, setCoordinates] = useState([])
  const [feature, setFeature] = useState(null)
  const [geoJson, setGeoJson] = useState(featureCollection)

  // defines default values for map
  const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

  // ensures map isn't rendered before the map's container has been created
  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    })

    map.current.on('load', () => {
      map.current.loadImage('.../assets/marker-purple.png', (error, image) => {
        if (error) throw error

        map.current.addImage('marker', image)
      })

      map.addSource('points', featureCollectionTemplate)
      map.current.addLayer(symbolLayer)
    })
  })

  // stores new lat/long/zoom values when user interacts with a map
  useEffect(() => {
    if (!map.current) return;

    map.current.on('move', () => { // on() method attaches event handlers for the selected elements and child elements
      setLng(map.current.getCenter().lng.toFixed(4)) // getCenter() returns map geographical centerpoint {lng: 0, lat: 0}
      setLat(map.current.getCenter().lat.toFixed(4)) // toFixed() defines number of digits following a decimal point, here it's 4 digits (0.0000)
      setZoom(map.current.getZoom().toFixed(2)) // getZoom() returns the map's current zoom level as a number
    })
  })

  // creates a single event listener to pull lat/long coordinates from the map on click
  const getCoordinates = async () => {
    map.current.once('click', (event) => {
      setCoordinates(event.lngLat)
    })
  }

  const saveCoordinates = () => {

    setGeoJson([...geoJson, coordinates])
  }

  return (
    <div>
      <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <button onClick={saveCoordinates}>Save Coordinates</button>
      <div ref={mapContainer} className="map-container" onClick={(event) => {
        getCoordinates(event)
      }}/>

    </div>
  )
}



