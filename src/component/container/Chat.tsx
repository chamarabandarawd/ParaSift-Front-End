import React from 'react'
import UserInputSection from './UserInputSection';
import GeneratedOutputSection from './GeneratedOutputSection';

function Chat() {
    const dataToRender = [1, 2, 3, 4, 5];
    return (
      <div className='mid-section'>
  
        {dataToRender.map((item, index) => (
          <><UserInputSection />
          <GeneratedOutputSection />
          </>
        ))}
  
      </div>
    )
}

export default Chat