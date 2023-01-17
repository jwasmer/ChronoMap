import { useState, useEffect } from "react";
import { Switch } from "@mui/material";
import { VisibilityOff, Visibility } from '@mui/icons-material';

export default function VisibilityToggle({ save, setSaveData }) {
  const [checked, setChecked] = useState(save.foreign.visibility)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  useEffect(() => {
    if (checked !== save.foreign.visibility) {
      setSaveData((prevState) => {
        let arr = [...prevState]

        return arr.map((element) => {
          if (element.foreign.saveKey === save.foreign.saveKey) {
            return {
              ...element,
                foreign: {
                  ...element.foreign,
                    visibility: checked
                }
            }
          }
          else {
            return element
          }
        })
      })
    }
  }, [checked])
  
  return (
    <>
      <Switch 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        checkedIcon={<Visibility />}
        icon={<VisibilityOff sx={{color: 'secondary.dark'}} />}
      />
    </>
  )
}