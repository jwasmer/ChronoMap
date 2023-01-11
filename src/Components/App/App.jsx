import React, { useState } from 'react'
import './App.css';

function App() {

  const [user, setUser] = useState(false)

  // The "App" level exists to leave room for a user login path at the top level. I don't want to place Map logic in here because I plan to add user authentication after this assignment is turned in, and leaving App.jsx available to coordinate that process will keep my code cleaner in the long run.
  return (
    <>
      <Map />
    </>
  );
}

export default App;
