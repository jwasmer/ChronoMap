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

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}