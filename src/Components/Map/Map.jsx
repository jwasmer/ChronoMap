import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { ReactDOM, useState, useEffect, useRef } from 'react';
import './Map.css'
import { featureCollectionTemplate, featureTemplate, symbolLayer, polygonLayer, buildFeature, updateFeatureCollection } from './MapboxHelpers';
import { reverseGeocode, forwardGeocode, geocodeQuery } from '../../apiCalls/Geocode'
import { isochroneQuery } from '../../apiCalls/Isochrone';

mapboxgl.accessToken = 'pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw'

export default function Map() {
  const [coordinates, setCoordinates] = useState(0)
  const [featureCollection, setFeatureCollection] = useState(featureCollectionTemplate)
  const [marker, setMarker] = useState(null)
  const [clickPolygon, setClickPolygon] = useState(null)

  const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(-70.9)
    const [lat, setLat] = useState(42.35)
    const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    })

    map.current.on('load', () => {
      map.current.addSource('points', featureCollection)
      map.current.addLayer(symbolLayer)
    })

    map.current.on('click', (event) => {
      setCoordinates(event.lngLat)
    })
  })

  useEffect(() => {
    if (!map.current) return;

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  useEffect(() => {
    if (marker) marker.remove()

    if (coordinates) {
      const newMarker = new mapboxgl.Marker()

      newMarker.setLngLat([coordinates.lng, coordinates.lat]).addTo(map.current)

      setMarker(newMarker)

      const profile = 'driving'
      const time = '60'
      const lngLat = `${coordinates.lng},${coordinates.lat}`

      const polygon = isochroneQuery(profile, lngLat, time)

      polygon.then((data) => {
        const layer = featureCollectionTemplate
        layer.data = data

        if (map.current.getSource('click')) {
          map.current.removeLayer('click')
          map.current.getSource('click').setData(data)          
          map.current.addLayer(polygonLayer)
        }
        else {
          map.current.addSource('click', layer)
          map.current.addLayer(polygonLayer)
        }
      })
    }
  }, [coordinates])

  const saveCoordinates = (featureTemplate, coordinates) => {
    const features = featureCollection.data.features

    const collection = updateFeatureCollection(featureCollectionTemplate, features, buildFeature(featureTemplate, coordinates))

    setFeatureCollection(collection)
    console.log(featureCollection)
  }

  return (
    <div>
      <div className='sidebar'>
        Longitude: {coordinates.lng} | Latitude: {coordinates.lat} | Zoom: {zoom}
      </div>
      <button onClick={saveCoordinates}>Save Coordinates</button>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}



