import mapboxgl from '!mapbox-gl';
import React, { useEffect, useRef } from 'react';
import './Map.css'

export default function Map() {

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

  return (
    <div>
      <div className='sidebar'>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}