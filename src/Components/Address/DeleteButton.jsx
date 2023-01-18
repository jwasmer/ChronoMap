import PropTypes from "prop-types"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

DeleteButton.propTypes = {
  setSaveData: PropTypes.func.isRequired,
  save: PropTypes.object.isRequired
}


export default function DeleteButton({ save, setSaveData }) {

  const removeAddress = (save) => {
    setSaveData((prevState) => {
      let arr = [...prevState]
      return arr.filter((element) => {
        if (element.foreign.saveKey !== save.foreign.saveKey) {

        return element
        }
        else {
          
          return
        }
      })
    })
  }

  return (
    <>
      <IconButton 
        data-cy="delete"
        sx={{mr: "12px"}}
        onClick={() => {removeAddress(save)}}
      >
        <DeleteIcon color="secondary" fontSize="large" />
      </IconButton>
    </>
  )
}