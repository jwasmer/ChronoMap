import { useState, useEffect } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel, Avatar } from '@mui/material'
import '../Options/Options.css'

export default function TimeButtons({ saveData, setSaveData }) {
  console.log('TimeButton saveData:', saveData[0])
  const [value, setValue] = useState(60)
  // saveData[0].foreign.time


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
                time: value
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
          name="time-selection-buttons"
          onChange={handleChange}
        >
          <FormControlLabel 
            value={15} 
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 15m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa'}}> 15m </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            value={30}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 30m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa'}}> 30m </Avatar>} 
              />
            } 
          />          
          <FormControlLabel 
            value={45} 
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 45m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa'}}> 45m </Avatar>} 
              />
            } 
          />          
          <FormControlLabel 
            value={60}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 60m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa'}}> 60m </Avatar>} 
              />
            } 
          />          
        </RadioGroup>
      </FormControl>
    </>
  )
}


{/* <IconButton id='15' onClick={updateButtons}>
<Avatar sx={{width: 48, height: 48}}>15m</Avatar>
</IconButton>
<IconButton id='30'>
<Avatar sx={{width: 48, height: 48}}>30m</Avatar>
</IconButton>
<IconButton id='15'>
<Avatar sx={{width: 48, height: 48}}>45m</Avatar>
</IconButton>
<IconButton id='60'>
<Avatar sx={{width: 48, height: 48}}>60m</Avatar>
</IconButton> */}