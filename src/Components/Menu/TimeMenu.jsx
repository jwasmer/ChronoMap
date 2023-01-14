import '../MapUI/MapUI.css'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function IconMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [time, setTime] = useState('60m')
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Travel time'>
        <IconButton
          className='menu'
          onClick={handleClick}
          size='small'
          aria-controls={open ? 'travel time' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 420,
            margin: '8px 8px 8px 8px'
          }}
        >
          <Avatar sx={{ bgcolor: '#8e24aa', width: 48, height: 48 }}>{time}</Avatar>
        </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='travel time'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 1,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => setTime('15m')}>
          <ListItemText>15 minutes</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setTime('30m')}>
          <ListItemText>30 minutes</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setTime('45m')}>
          <ListItemText>45 minutes</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setTime('60m')}>
          <ListItemText>60 minutes</ListItemText>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}