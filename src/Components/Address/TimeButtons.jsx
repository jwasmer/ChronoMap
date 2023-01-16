export default function TimeButtons({ saveData, setSaveData }) {
  // const [selection, setSelection] = useState(saveData.foreign.time)
    const updateButtons = () => {
      console.log(this.id)
    }
  return (
    <FormControl>
      <IconButton id='15' onClick={updateButtons}>
        <Avatar sx={{width: 48, height: 48, bgcolor: '#8e24aa', opacity: '.87'}}>15m</Avatar>
      </IconButton>
      <IconButton id='30'>
        <Avatar sx={{width: 48, height: 48}}>30m</Avatar>
      </IconButton>
      <IconButton id='15'>
        <Avatar sx={{width: 48, height: 48}}>45m</Avatar>
      </IconButton>
      <IconButton id='60'>
        <Avatar sx={{width: 48, height: 48}}>60m</Avatar>
      </IconButton>
    </FormControl>
  )
}
