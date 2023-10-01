import { TextField } from '@mui/material'
import React, { Dispatch, useEffect, useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import "./styles.css";
import { useDispatch } from 'react-redux';
import { getChats,genChatAction } from '../../store/reducers/chatSlice';

interface Props{
  message:string,
  updateMessage:Function
}


function UserInput({message,updateMessage}:Props) {
  const dispatch: Dispatch<any> = useDispatch();

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // If Enter key is pressed, call handleSendMessage function
      handleSendMessage();
    }
  };


  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage(event.target.value)
  }

  const handleSendMessage = () => {

    //Generate summary
    const requestBody1 = {
      text: message
    };


    fetch("http://localhost:5000/api/v1/summary/generate", {
      method: 'POST',
      body: JSON.stringify(requestBody1),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(
        data => {
          const generatedSummary = data.message;
          const requestBody2 = {
            text: message,
            summary: generatedSummary
          };
          dispatch(genChatAction(requestBody2.text,requestBody2.summary));
          return fetch("http://localhost:5000/api/v1/summary", {
            method: 'POST',
            body: JSON.stringify(requestBody2),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => response.json())
            .then(
              data => {
                updateMessage('');
              })
            .catch(error => {

              console.error('Fetch error:', error);
            });
        }


      )
      .catch(error => {

        console.error('Fetch error:', error);
      });

      dispatch(getChats());
      console.log("Dispatching getChats");
  };

  return (
    <div className='userInput-outer'>
      <TextField
        id="outlined-basic"
        label="Send a message"
        variant="outlined"
        value={message}
        onChange={handleTextFieldChange}
        onKeyDown={handleEnterKeyPress} 
      />
      <div className='sendBtn' onClick={handleSendMessage}>
        <SendOutlinedIcon />
      </div>

    </div>
  )
}

export default UserInput