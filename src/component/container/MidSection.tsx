import React from 'react'
import UserInputSection from './UserInputSection'
import GeneratedOutputSection from './GeneratedOutputSection'
import Chat from './Chat';

function MidSection() {

  const dataToRender = [1, 2, 3, 4, 5];
  return (
    <div className='mid-section'>
      <Chat/>

    </div>
  )
}

export default MidSection