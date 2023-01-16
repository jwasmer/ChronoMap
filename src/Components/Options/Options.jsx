import './Options.css'
import { Button, Typography } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Address from '../Address/Address';

export default function Options({ saveData, setSaveData }) {
  console.log('saveData from Options:', saveData)

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
        saveData={ saveData }
        setSaveData={ setSaveData }
      />
    </div>
  )
}