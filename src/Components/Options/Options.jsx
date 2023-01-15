import './Options.css'
import { Button, Typography } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Address from '../Address/Address';
import { useLocation } from 'react-router-dom';

export default function Options() {
  const location = useLocation()
  const savedAddresses = location.savedAddresses
  const setSavedAddresses = location.setSavedAddresses

  console.log(location)

  console.log(savedAddresses)

  return(
    <div className='background'>
      <div className='header'>
        <Typography variant='h4'>Options</Typography>
        <div className='button-container'>
          <Button variant="contained" size='large' component={Link} to='/map/'>VIEW MAP</Button>
        </div>
      </div>
      {}
      <Address 
        // setSavedAddresses={ setSavedAddresses }
        // savedAddresses={ savedAddresses }
      />
    </div>
  )
}