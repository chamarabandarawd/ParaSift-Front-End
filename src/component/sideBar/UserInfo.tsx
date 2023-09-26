import React from 'react';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { storySelector } from '../../store/reducers/chatSlice';

function UserInfo() {
  const chats = useSelector(storySelector);

  // Check if chats.user exists and has firstName and lastName properties
  if (chats.user && chats.user.firstName && chats.user.lastName) {
    const userSymbol = chats.user.firstName.charAt(0) + chats.user.lastName.charAt(0);
    console.log(userSymbol);

    return (
      <div className='userInfo'>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{userSymbol}</Avatar>
        <h3>{chats.user.firstName} {chats.user.lastName}</h3>
      </div>
    );
  } else {
    // Handle the case where user data is not available
    return (
      <div className='userInfo'>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>?</Avatar>
        <h3>User Data Not Available</h3>
      </div>
    );
  }
}

export default UserInfo;
