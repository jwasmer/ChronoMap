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