import { createSlice } from "@reduxjs/toolkit"
const authSlice=createSlice({
    name:"authUser",
    initialState:{
        user:null 
    },
    reducers:{
        login:(state,action)=>{
            state.user.push(action.payload)
        }
    }
})
export const {login}=authSlice.actions;
export default authSlice.reducer;