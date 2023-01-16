import { useState, useEffect } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel, Avatar } from '@mui/material'
import { DirectionsWalk, DirectionsBike, DirectionsCar } from "@mui/icons-material";
import '../Options/Options.css'

export default function ProfileButtons({ saveData, setSaveData }) {
  console.log('ProfileButton saveData:', saveData[0])
  const [value, setValue] = useState(saveData[0].foreign.profile)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    console.log('value:', value)
    setSaveData((prevState) => {
      return {
      ...prevState,
        [0]: {
          ...prevState[0],
            foreign: {
              ...prevState[0].foreign,
                profile: value
          }
        }
      }
    })
  }, [value])
  
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          value={value}
          name="profile-selection-buttons"
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            width: 'auto',
          }}
        >
          <FormControlLabel 
            value="walking" 
            sx={{m: '0'}}
            control={
              <Radio 
                size="medium" 
                icon={<Avatar sx={{width: 48, height: 48, display: 'flex', justifyContent: 'center'}}> <DirectionsWalk fontSize='medium' sx={{color: 'white' }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: 'primary.main'}}> <DirectionsWalk fontSize='medium' sx={{color: 'white' }}/> </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            value="cycling" 
            sx={{m: '0'}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> <DirectionsBike fontSize='medium' sx={{color: 'white' }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: 'primary.main'}}> <DirectionsBike fontSize='medium' sx={{color: 'white' }}/> </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            value="driving" 
            sx={{m: '0'}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> <DirectionsCar fontSize='medium' sx={{color: 'white' }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: 'primary.main'}}> <DirectionsCar fontSize='medium' sx={{color: 'white' }}/> </Avatar>} 
              />
            } 
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}