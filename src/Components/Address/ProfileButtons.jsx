import { useState } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import { DirectionsWalk, DirectionsBike, DirectionsCar } from "@mui/icons-material";
import '../Options/Options.css'

export default function ProfileButtons({ saveData, setSaveData }) {
  
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          defaultValue={saveData[0].foreign.profile}
          name="profile-selection-buttons"
        >
          <FormControlLabel value="walking" control={<Radio size="large" icon={<DirectionsWalk />} checkedIcon={<DirectionsWalk />} />} />
          <FormControlLabel value="cycling" control={<Radio size="large" icon={<DirectionsBike />} checkedIcon={<DirectionsBike />} />} />
          <FormControlLabel value="driving" control={<Radio size="large" icon={<DirectionsCar />} checkedIcon={<DirectionsCar />} />} />
        </RadioGroup>
      </FormControl>
    </>
  )
}

{/* <IconButton id="walking" >
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsWalk fontSize='medium'/>
        </Avatar>      
      </IconButton>
      <IconButton id="cycling">
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsBike fontSize='medium'/>
        </Avatar>
      </IconButton>
      <IconButton id="driving">
        <Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa', opacity: '.87'}}>
          <DirectionsCar fontSize='medium'/>
        </Avatar>
  </IconButton> */}