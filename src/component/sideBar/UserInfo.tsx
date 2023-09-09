import React from 'react';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function UserInfo() {
  return (
    <div className='userInfo'>
         <Avatar sx={{ bgcolor: deepPurple[500] }}>CB</Avatar>
         <h3>Chamara Bandara</h3>
    </div>
  )
}

export default UserInfo