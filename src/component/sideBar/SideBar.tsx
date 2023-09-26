import React, { Dispatch } from 'react';
import "./styles.css";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ChatList from './ChatList';
import UserInfo from './UserInfo';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch } from 'react-redux';
import { clearChat } from '../../store/reducers/chatSlice';


function SideBar() {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <div className='sideBar'>
      <br />
      <Button className='addBtn' variant="outlined" >
        Para Shift Pro.
      </Button>
      <hr/>
      <Button className='addBtn' variant="outlined" 
      onClick={()=>{
        dispatch(clearChat());
      }}>
         
      <span style={{ marginRight: '16px' }}>Clear Chat</span>
        <DeleteOutlinedIcon />
      </Button>
      

      <UserInfo />

    </div>
  )
}

export default SideBar