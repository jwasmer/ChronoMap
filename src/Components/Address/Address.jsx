import React from 'react';
import { Typography, Paper, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ProfileButtons from './ProfileButtons';
import TimeButtons from './TimeButtons';

export default function Address({ saveData, setSaveData }) {
  console.log(saveData)

  return (
  <Paper className='paper' elevation={2} overflow='scroll'>
    <IconButton sx={{
      ml: '12px'
    }}>
      <VisibilityIcon color='primary' fontSize='large' />
    </IconButton>
    <Divider orientation='vertical' variant="middle" sx={{ml: '12px', mr: '24px'}} flexItem/>
    <Typography noWrap={true} variant='body1' className='address-text'> 
      21 Foote Street, Pawcatuck, Connecticut 06379
    </Typography>
    <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '24px'}} flexItem/>
    <TimeButtons
      saveData={ saveData }
      setSaveData={ setSaveData }/>
    <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '24px'}} flexItem/>
    <ProfileButtons 
      saveData={ saveData }
      setSaveData={ setSaveData }/>
    <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '12px'}} flexItem/>
    <IconButton sx={{
      mr: '12px'
    }}>
      <DeleteIcon color='secondary' fontSize='large' />
    </IconButton>
  </Paper>
  )
}