import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useState, useEffect, useRef } from 'react';
import './Map.css'
import { featureCollectionTemplate, symbolLayer, polygonLayer } from './MapboxHelpers';
import { isochroneQuery } from '../../apiCalls/Isochrone';

mapboxgl.accessToken = 'pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw'

export default function Map({ searchGeoJson, setSearchGeoJson, setCurrentPolygon, profile, time, count }) {
  const [coordinates, setCoordinates] = useState(0)
  const [marker, setMarker] = useState(null)

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
      map.current.addSource('saved', featureCollectionTemplate)
      map.current.addSource('points', featureCollectionTemplate)
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
    if (searchGeoJson) {
        searchGeoJson
          .then((data) => {
            setCoordinates({lng: data.features[0].center[0], lat: data.features[0].center[1]})
            setSearchGeoJson(null)
          })
      }
  }, [searchGeoJson])

  useEffect(() => {
    if (marker) marker.remove()

    if (coordinates) {
      const newMarker = new mapboxgl.Marker()

      newMarker.setLngLat([coordinates.lng, coordinates.lat]).addTo(map.current)
      setMarker(newMarker)

      const lngLat = `${coordinates.lng},${coordinates.lat}`
      const polygon = isochroneQuery(profile, lngLat, time)

      polygon.then((data) => {
        const layer = featureCollectionTemplate

        data.foreign = {}
        data.foreign.profile = profile
        data.foreign.saveKey = count
        data.foreign.lngLat = lngLat
        data.foreign.time = time
        data.foreign.hidden = false

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

        return data
      })
      .then((data) => {
        setCurrentPolygon(data)
      })

      map.current.flyTo({
        center: coordinates
        })
    }
  }, [coordinates])

  return (
    <>
      <div ref={mapContainer} className="map-container" />
    </>
  )
}



