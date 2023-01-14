import './Options.css'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Address from '../Address/Address';

export default function Options() {


  return(
    <div className='background'>
      <div className='header'>
        <Typography variant='h4'>Options</Typography>
        <div className='button-container'>
          <Button variant="contained" size='large' component={Link} to='/'>VIEW MAP</Button>
        </div>
      </div>
      <Address />
      <Address />
    </div>
  )
}