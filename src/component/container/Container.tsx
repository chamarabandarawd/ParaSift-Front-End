import React, { useState } from 'react';
import "./styles.css";

import GeneratedOutputSection from './GeneratedOutputSection';
import UserInputSection from './UserInputSection';
import UserInput from './UserInput';
import MidSection from './MidSection';

function Container() { 
  const [message, setMessage] = useState<string>('');

  const updateMessage = (msg:string)=>{
    setMessage(msg)
  }

  return (
    <div className='conatiner'>
      <section className='header'> Para Shift (v1)</section>
      <MidSection/>
      <UserInput message={message} updateMessage={updateMessage} />
    </div>
  )
}

export default Container