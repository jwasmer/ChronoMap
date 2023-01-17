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


  // useEffect(() => {
  //   saveData.forEach((data, index) => {
  //     if (data.foreign.saveKey = saveKey) {
  //       setSaveData((prevData) => {
  //         let arr = [...prevData]
  //         const dataCopy = prevData[index]

  //         dataCopy.foreign.visibility = checked

  //         arr.splice(index, 1, dataCopy)

  //         return arr
  //       })
  //     }
  //   })
  // }, [checked])
  
  return (
    <>
      <Switch 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  )
}