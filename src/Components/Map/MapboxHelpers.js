export const featureCollectionTemplate = {
  'type': 'geojson',
  'data': {
    'type': 'FeatureCollection',
    'features': []
  }
}

export const featureTemplate = {
  'type': 'Feature',
  'geometry': {
    'type': 'Point',
    'coordinates': []
  },
  'properties': {
    // 'title': 'Mapbox DC'
  }
}

export const symbolLayer = {
  'id': 'points',
  'type': 'symbol',
  'source': 'points',
  'layout': {
    'icon-image': 'marker',
    'text-field': ['get', 'title'],
    'text-font': [
      'Open Sans Semibold',
      'Arial Unicode MS Bold'
    ],
    'text-offset': [0, 1.25],
    'text-anchor': 'top'
  }
}

export const polygonLayer = {
  'id': 'click',
  'type': 'fill',
  'source': 'click',
  'layout': {},
  'paint': {
    'fill-color': '#0080ff',
    'fill-opacity': 0.5
  }
}

// export const buildIsochrone = (coordinates, isochroneQuery, profile, time) => {
//   const selectedProfile = profile || 'driving'
//   const lngLat = `${coordinates.lng},${coordinates.lat}`
//   const selectedTime = time || '60'

//   const polygon = isochroneQuery(profile, lngLat, time)
//   polygon.then((data) => {
//     const layer = featureCollectionTemplate
//     layer.data = data
//     if (map.current.getSource('click')) {
//       map.current.getSource('click').data = data
//     }
//     else {
//       map.current.addSource('click', layer)
//       map.current.addLayer(polygonLayer)
//     }
//   })
// }

export const buildFeature = (featureTemplate, coordinates) => {
  const coordinateArray = [coordinates.lat, coordinates.lng]
  const feature = featureTemplate

  feature.geometry['coordinates'] = coordinateArray
  feature.properties = {'title': 'userClick'}

  return feature
}

export const updateFeatureCollection = (featureCollectionTemplate, features, feature) => {
  const featureCollection = featureCollectionTemplate

  featureCollection.data.features = [...features, feature]

  return featureCollection
}