import React from 'react';
import "./styles.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ChatList from './ChatList';
import UserInfo from './UserInfo';

function SideBar() {
  return (
    <div className='sideBar'>
      <br/>
      <Button className='addBtn' variant="outlined" >
        <AddIcon/>
        New Chat
        </Button>
    <ChatList/>
    <UserInfo/>

    </div>
  )
}

export default SideBar