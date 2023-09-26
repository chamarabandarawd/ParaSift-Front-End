import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

interface Props{
  text:string
}

function UserInputSection({text}:Props) {
  
  return (

    <div className='user_input_section'>
      <div className="fixed-left">
        <Avatar className='avatar' sx={{ bgcolor: deepPurple[500] }}>CB</Avatar>
      </div>
      <div className="req_para">{text}</div>
      <div className="fixed-right">
        <EditNoteOutlinedIcon />
        <SaveOutlinedIcon />
      </div>
    </div>
  )
}

export default UserInputSection