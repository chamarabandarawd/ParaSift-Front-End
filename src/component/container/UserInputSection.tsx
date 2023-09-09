import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

function UserInputSection() {
  return (
    <div className='user_input_section'>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>CB</Avatar>
    <div className='req_para'>MessageM essageMessage Messag eMessageMessageM essageMessage Messag eMessage
    MessageM essageMessage Messag eMessage
    MessageM essageMessage Messag eMessage</div>
    </div>
  )
}

export default UserInputSection