import React, { Dispatch, useEffect, useRef } from 'react'
import UserInputSection from './UserInputSection'
import GeneratedOutputSection from './GeneratedOutputSection'
import Chat from './Chat';
import { useDispatch, useSelector } from "react-redux";
import { getChats, storySelector } from '../../store/reducers/chatSlice';



function MidSection() {

  const chats = useSelector(storySelector);
  const dispatch: Dispatch<any> = useDispatch();
  const midSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const midSection = midSectionRef.current;
    if (midSection) {
      midSection.scrollTop = midSection.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    dispatch(getChats())
  }, [dispatch]);
  return (
<div className='mid-section' ref={midSectionRef}>
  {chats.chats.map((chat: any) => (
    <div key={chat.publicId} className='chat'>
      {chat.text !== '' && <UserInputSection text={chat.text} />}
      <GeneratedOutputSection summary={chat.summary} />
    </div>
  ))}
</div>
  )
}

export default MidSection