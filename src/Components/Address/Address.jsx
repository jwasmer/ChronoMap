import PropTypes from "prop-types"
import { Typography, Paper } from "@mui/material"
import Divider from "@mui/material/Divider";
import ProfileButtons from "./ProfileButtons";
import TimeButtons from "./TimeButtons";
import DeleteButton from "./DeleteButton";
import VisibilityToggle from "./VisibilityToggle";

Address.propTypes = {
  setSaveData: PropTypes.func.isRequired,
  save: PropTypes.object.isRequired
}

export default function Address({ save, setSaveData }) {

  return (
    <Paper data-cy="address-card" className="paper" elevation={2} overflow="scroll">
      <VisibilityToggle 
        save={ save }
        setSaveData={ setSaveData }
      />
      <Divider orientation="vertical" variant="middle" sx={{ml: "12px", mr: "24px"}} flexItem/>
      <Typography noWrap={true} variant="body1" className="address-text" sx={{width: '300px'}}> 
        {`${save.foreign.address}`}
      </Typography>
      <Divider orientation="vertical" variant="middle" sx={{ml: "24px", mr: "24px"}} flexItem/>
      <TimeButtons
        save={ save }
        setSaveData={ setSaveData }
      />
      <Divider orientation="vertical" variant="middle" sx={{ml: "24px", mr: "24px"}} flexItem/>
      <ProfileButtons 
        save={ save }
        setSaveData={ setSaveData }
      />
      <Divider orientation="vertical" variant="middle" sx={{ml: "24px", mr: "12px"}} flexItem/>
      <DeleteButton 
        save={ save }
        setSaveData={ setSaveData }
      />
    </Paper>
  )
}