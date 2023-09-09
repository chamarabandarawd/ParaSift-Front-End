import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function UserInputSection() {
  return (
    <div className='user_input_section'>
    <Avatar sx={{ bgcolor: deepPurple[500] }}>CB</Avatar>
    <div className='req_para'>MessageM essageMessage Messag eMessageMessageM essageMessage Messag eMessage
    MessageM essageMessage Messag eMessage
    MessageM essageMessage Messag eMessage
    eM essageMessage Messag eMess
    eM essageMessage Messag eMess</div>
    <div className='icon'>
    <EditNoteOutlinedIcon/>
    <SaveOutlinedIcon/>
    </div>

    </div>
  )
}

export default UserInputSection