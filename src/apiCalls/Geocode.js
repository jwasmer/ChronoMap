export const reverseGeocode = (longitude, latitude) => {
  const query = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json`

  return query
}

export const forwardGeocode = (search) => {
  const encodedSearch = encodeURIComponent(search)

  const query = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedSearch}.json`

  return query
}

export const geocodeQuery = async (query) => {
  try {
    const response = await fetch(query)

    if (!response.ok) {
      throw new Error(`Status code: ${response.status}`)
    }

    const data = await response.json()
    return data
  } 
  catch (error) {
    console.log(error)
  }
}