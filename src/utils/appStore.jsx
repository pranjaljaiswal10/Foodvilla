import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";
import authSlice from "./authSlice";
const store=configureStore({
    reducer:{
        foodCart:cartSlice,
        favouriteFood:favouriteSlice,
        userAuth:authSlice,
    }
})

export default store;