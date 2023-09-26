import React, { useState } from 'react'
import UserInputSection from './UserInputSection';
import GeneratedOutputSection from './GeneratedOutputSection';

interface Props{
  story:[]
}



function Chat({story}:Props) {
  console.log("heloo")
  console.log(story);
    const chatList=story;
    return (
      <div className='mid-section'>
  
        {chatList.map((chat:any) => (
          <>
          <UserInputSection text={chat.text} />
          <GeneratedOutputSection summary={chat.summary}/>
          </>
        ))}
  
      </div>
    )
}

export default Chat