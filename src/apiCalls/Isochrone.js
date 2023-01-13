export const isochroneQuery = async (profile, coordinates, time) => {
  const query = `https://api.mapbox.com/isochrone/v1/mapbox/${profile}/${coordinates}?contours_minutes=${time}&polygons=true&access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw`

  console.log(query)

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