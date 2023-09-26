import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./reducers/chatSlice";


const store=configureStore({
    reducer:{
        story:storyReducer
    }
});

export default store;