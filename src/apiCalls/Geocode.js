export const reverseGeocode = (lng, lat) => {
  const query = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw`

  return query
}

export const forwardGeocode = (search) => {
  const encodedSearch = encodeURIComponent(search)

  const query = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedSearch}.json?access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw`

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