import React, { useState } from 'react'
import './App.css';
import MapUI from '../MapUI/MapUI'

export default function App() {

  const [user, setUser] = useState(false)

  return (
    <>
      <MapUI />
    </>
  );
}
