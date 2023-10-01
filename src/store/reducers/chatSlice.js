import { createAction, createAsyncThunk, createReducer, createSelector } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const initialState={
    user:[{
        firstName:"Chamara",
        lastName:"Bandara",
    }],
    chats:[
        {
            publicId:'123',
            text:'',
            summary:'Hi. I will provide summary'
        }
    ]

}

export const genChatAction = createAction('chat-gen',(text,summary)=>{
    return{
        payload:{
            publicId:nanoid(),
            text,
            summary
        }
    }
});

export const userSignUp=createAction('user-singUp',(firstName,lastName)=>{
    return{
        payload:{
            firstName,
            lastName,
        }
    }
})

export const clearChat=createAsyncThunk('clear-chat',async()=>{
    try {
        const response =await fetch('https://parasift.onrender.com/api/v1/summary',{
            method:'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to clear chat');
          }
          return{
            message:'Chat cleared successfully'
          } 
    } catch (error) {
        throw error;
    }
})

export const getChats=createAsyncThunk('chats-get',async()=>{
    const chats=await fetch('https://parasift.onrender.com/api/v1/summary')
    const data=await chats.json()
    if(Array.isArray(data)){
        console.log(data)
        return data
    }else
    return{
        err:'some error'
    }
});





const storyReducer=createReducer(initialState,(builder)=>{
    builder.addCase(getChats.fulfilled,(state,action)=>{
        const updatedChat = state.chats.find(chat => chat.publicId === '123'); // Replace '123' with the actual publicId you want to update
  if (updatedChat) {
    // action.payload.map(element => {
    //     state.chats.push(element);
    state.chats=action.payload;
    //});
  }
    });
    builder.addCase(genChatAction,(state,action)=>{
            state.chats.push(action.payload);
        
    });
    builder
      .addCase(clearChat.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(clearChat.fulfilled, (state, action) => {
        state.chats=[{
            publicId:'123',
            text:'',
            summary:'Hi. I will provide summary'
        }]
      })
      .addCase(clearChat.rejected, (state, action) => {
        // Handle error state, display error message, or perform other actions
      });
      builder.addCase(userSignUp,(state,action)=>{
        state.user=action.payload;
        console.log(state.user);
      })
})

const story=(store)=>store.story;

export const storySelector=createSelector([story],(story)=>{
    return story;
})

export default storyReducer;
