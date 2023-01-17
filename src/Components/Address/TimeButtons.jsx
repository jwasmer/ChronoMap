import { useState, useEffect } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel, Avatar } from "@mui/material"
import "../Options/Options.css"

export default function TimeButtons({ save, setSaveData }) {
  const [value, setValue] = useState(save.foreign.time)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (value !== save.foreign.time) {
      setSaveData((prevState) => {
        let arr = [...prevState]

        return arr.map((element) => {
          if (element.foreign.saveKey === save.foreign.saveKey) {
            return {
              ...element,
                foreign: {
                  ...element.foreign,
                    time: value
                }
            }
          }
          else {
            return element
          }
        })
      })
    }
  }, [value])

  return (
    <>
      <FormControl>
        <RadioGroup
          row
          value={value}
          name="time-selection-buttons"
          onChange={handleChange}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            width: "auto",
          }}
        >
          <FormControlLabel 
            value={15}
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 15m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, color: "white", bgcolor: "primary.main"}}> 15m </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            value={30}
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 30m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "#8e24aa"}}> 30m </Avatar>} 
              />
            } 
          />          
          <FormControlLabel 
            value={45}
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 45m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "#8e24aa"}}> 45m </Avatar>} 
              />
            } 
          />          
          <FormControlLabel 
            value={60}
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> 60m </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "#8e24aa"}}> 60m </Avatar>} 
              />
            } 
          />          
        </RadioGroup>
      </FormControl>
    </>
  )
}