import React, { useState } from 'react'
import './App.css';
import Map from '../Map/Map'

export default function App() {

  const [user, setUser] = useState(false)

  return (
    <>
      <Map />
    </>
  );
}
