import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice=createSlice({
    name:"favouriteFood",
    initialState:{
        favourite:[]
    },
    reducers:{
        addToFavourite:(state,action)=>{
            state.favourite.push(action.payload)
        },
        removeFromFavourite:(state,action)=>{
            state.favourite=state.favourite.filter(item=>item.id!==action.payload)
        },
       
    }
})

export const {addToFavourite,removeFromFavourite}=favouriteSlice.actions;
export default favouriteSlice.reducer;