import { useState, useEffect } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
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
        >
          <FormControlLabel 
            value="walking" 
            control={
              <Radio size="large" icon={<DirectionsWalk />} 
                checkedIcon={<DirectionsWalk />} 
              />
            } 
          />
          <FormControlLabel 
            value="cycling" 
            control={
              <Radio 
                size="large" 
                icon={<DirectionsBike />} 
                checkedIcon={<DirectionsBike />} 
              />
            } 
          />
          <FormControlLabel 
            value="driving" 
            control={
              <Radio 
                size="large" 
                icon={<DirectionsCar />} 
                checkedIcon={<DirectionsCar />} 
              />
            } 
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}