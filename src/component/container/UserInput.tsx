import { TextField } from '@mui/material'
import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function UserInput() {
  return (
    <div className='userInput-outer'>
        <TextField id="outlined-basic" label="Send a message" variant="outlined" />
        <SendOutlinedIcon/>
    </div>
  )
}

export default UserInput