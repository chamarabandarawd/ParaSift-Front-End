import React from 'react';
import "./styles.css";

import GeneratedOutputSection from './GeneratedOutputSection';
import UserInputSection from './UserInputSection';
import UserInput from './UserInput';
import MidSection from './MidSection';

function Container() {
  return (
    <div className='conatiner'>
      <section className='header'> Para Shift (v1)</section>
      <MidSection/>
      <UserInput/>
    </div>
  )
}

export default Container