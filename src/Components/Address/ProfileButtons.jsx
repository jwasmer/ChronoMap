import PropTypes from "prop-types"
import { useState, useEffect } from "react";
import { Radio, FormControl, RadioGroup, FormControlLabel, Avatar } from "@mui/material"
import { DirectionsWalk, DirectionsBike, DirectionsCar } from "@mui/icons-material";
import "../Options/Options.css"

ProfileButtons.propTypes = {
  setSaveData: PropTypes.func.isRequired,
  save: PropTypes.object.isRequired
}


export default function ProfileButtons({ save, setSaveData }) {
  const [value, setValue] = useState(save.foreign.profile)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (value !== save.foreign.profile) {
      setSaveData((prevState) => {
        let arr = [...prevState]

        return arr.map((element) => {
          if (element.foreign.saveKey === save.foreign.saveKey) {
            return {
              ...element,
                foreign: {
                  ...element.foreign,
                    profile: value
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
          data-cy="profile-radio"
          row
          value={value}
          name="profile-selection-buttons"
          onChange={handleChange}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            width: "auto",
          }}
        >
          <FormControlLabel 
            data-cy="walking"
            value="walking" 
            sx={{m: "0"}}
            control={
              <Radio 
                size="medium" 
                icon={<Avatar sx={{width: 48, height: 48, display: "flex", justifyContent: "center"}}> <DirectionsWalk fontSize="medium" sx={{color: "white" }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "primary.main"}}> <DirectionsWalk fontSize="medium" sx={{color: "white" }}/> </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            data-cy="cycling"
            value="cycling" 
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> <DirectionsBike fontSize="medium" sx={{color: "white" }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "primary.main"}}> <DirectionsBike fontSize="medium" sx={{color: "white" }}/> </Avatar>} 
              />
            } 
          />
          <FormControlLabel 
            data-cy="driving"
            value="driving" 
            sx={{m: "0"}}
            control={
              <Radio 
                size="large" 
                icon={<Avatar sx={{width: 48, height: 48}}> <DirectionsCar fontSize="medium" sx={{color: "white" }}/>  </Avatar>} 
                checkedIcon={<Avatar sx={{width: 48, height: 48, bgcolor: "primary.main"}}> <DirectionsCar fontSize="medium" sx={{color: "white" }}/> </Avatar>} 
              />
            } 
          />
        </RadioGroup>
      </FormControl>
    </>
  )
}