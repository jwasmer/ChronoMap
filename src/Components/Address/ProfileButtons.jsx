import { FormControl } from "@mui/material";

export default function ProfileButtons({ saveData, setSaveData }) {
  const [selection, setSelection] = useState(saveData.foreign.profile)
  
  return (
    <FormControl>
      <IconButton className='icon__button'>
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsWalkIcon fontSize='medium'/>
        </Avatar>      
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48}}>
          <DirectionsBikeIcon fontSize='medium'/>
        </Avatar>
      </IconButton>
      <IconButton>
        <Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa', opacity: '.87'}}>
          <DirectionsCarIcon fontSize='medium'/>
        </Avatar>
      </IconButton>
    </FormControl>
  )
}