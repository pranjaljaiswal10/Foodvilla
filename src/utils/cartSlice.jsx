import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"foodCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
           
        },
        removeFromCart:(state,action)=>{
       state.cart=state.cart.filter(item=>item.id!==action.payload)
        },
        increaseQuantity:(state,action)=>{
        state.cart=state.cart.map(item=>{
            if(item.id===action.payload)
            {
            return {...item,quantity:item.quantity+1}
            }
            return item
        })
        },
        decreaseQuantity:(state,action)=>{
         state.cart=state.cart.map(item=>{
            if(item.id===action.payload&& item.quantity>0)
            {
                return {...item,quantity:item.quantity-1}
            }
            return item
         })
        },
        clearCart:(state)=>{
            state.cart=[]
        }
    }
}
)
    
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart}=cartSlice.actions;
export default cartSlice.reducer;
