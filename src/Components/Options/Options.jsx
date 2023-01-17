import './Options.css'
import { useState, useEffect } from 'react'
import { Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Address from '../Address/Address';

export default function Options({ saveData, setSaveData }) {
  console.log('Options rendered.')

  const renderAddresses = (saveData) => {
    return saveData.map(save => {
      return (
        <Address 
          key={save.foreign.saveKey}
          save={ save }
          setSaveData={ setSaveData }
        />
      )
    })
  }

  return(
    <div className='background'>
      <div className='header'>
        <Typography variant='h4'>Options</Typography>
        <div className='button-container'>
          <Button variant="contained" size='large' component={Link} to='/map/'>VIEW MAP</Button>
        </div>
      </div>
      {saveData.length ? renderAddresses(saveData) : 
      <Paper elevation={0} 
        sx={{
          mt: '48px'
        }}>
          <Typography variant='h5'>No saved addresses.</Typography>
        </Paper>
      }
    </div>
  )
}