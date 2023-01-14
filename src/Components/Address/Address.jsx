import { Typography, Paper, Box } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Address() {
  return (
    <Paper className='paper' elevation={2} overflow='scroll'>
      <IconButton sx={{
        ml: '12px'
      }}>
        <VisibilityIcon color='primary' fontSize='large' />
      </IconButton>
      <Divider orientation='vertical' variant="middle" sx={{ml: '12px', mr: '24px'}} flexItem/>
      <Typography variant='body1' className='address-text' sx={{
        ml: '24px'
      }}>
        21 Foote Street, Pawcatuck, Connecticut 06379
      </Typography>
      <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '24px'}} flexItem/>
      <IconButton>
        <Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa', opacity: '.87'}}>15m</Avatar>
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48}}>30m</Avatar>
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48}}>45m</Avatar>
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48}}>60m</Avatar>
      </IconButton>
      <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '24px'}} flexItem/>
      <IconButton className='icon__button'>
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsWalkIcon fontSize='medium'/>
        </Avatar>      
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsBikeIcon fontSize='medium'/>
        </Avatar>
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa', opacity: '.87'}}>
          <DirectionsCarIcon fontSize='medium'/>
        </Avatar>
      </IconButton>
      <Divider orientation='vertical' variant="middle" sx={{ml: '24px', mr: '12px'}} flexItem/>
      <IconButton sx={{
        mr: '12px'
      }}>
        <DeleteIcon color='secondary' fontSize='large' />
      </IconButton>
    </Paper>
  )
}