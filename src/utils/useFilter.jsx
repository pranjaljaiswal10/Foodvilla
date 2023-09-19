import { createContext,useContext,useReducer } from "react";

const initialState={
 rating:false,
 veg:false,
 nonVeg:false,
 offer:false,
 priceLess:false,
 priceBetween:false,
 searchTxt:""
}

function reducer(state,action){
    const {type,payload}=action
    switch(type){
  case "RATING":
    return {...state,rating:!state.rating}
    
  case "VEG":
    return {...state,veg:!state.veg}
  case "NONVEG":
   return {...state,nonVeg:!state.nonVeg};
   case "OFFER":
    return {...state,offer:!state.offer};
    case "LESS":
    return {...state,priceLess:!state.priceLess};
    case "BETWEEN":
    return {...state,priceBetween:!state.priceBetween};
    case "SEARCH":
    return {...state,searchTxt:payload}
    default:
        throw new Error("Unhandlled action")
}
}


const FilterContext=createContext()

const FilterProvider=({children})=>{
    const [filterState,filterDispatch]=useReducer(reducer,initialState)
return(
    <FilterContext.Provider value={{filterState,filterDispatch}}>
        {children}
    </FilterContext.Provider>
)
}

const useFilter=()=> useContext(FilterContext)
export {useFilter,FilterProvider}