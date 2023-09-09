import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function ChatBtn() {
  return (
    <div> <Button className='chatBtn' variant="outlined">
    <AddIcon/>
    Chat Title-01
    </Button>
    </div>
  )
}

export default ChatBtn