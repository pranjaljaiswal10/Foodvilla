import { useReducer } from "react";

const initialState={
    street:"",
    city:"",
    zipcode:"",
    state:"",
    country:"",
    number:""
}

function reducer(state,action){
  const {type,payload}=action;
  switch(type){
    case "STREET_CHANGE":
    return  {...state,street:payload};
    case "CITY_CHANGE":
    return  {...state,city:payload};
    case "ZIPCODE_CHANGE":
    return  {...state,zipcode:payload};
    case "STATE_CHANGE":
    return    {...state,state:payload};
    case "COUNTRY_CHANGE":
    return  {...state,country:payload}
    case "NUMBER_CHANGE":
    return  {...state,number:payload};
    default:
        throw new Error("unhandelled action")
  }
}

const [state,dispatch]=useReducer(reducer,initialState)




const Checkout=()=>{
    return(
    <>
    <div className="account">
        <h1>Account</h1>
        <p>To place your order now, log in to your existing account or sign up.</p>
        <div>Login <span>Enter your detail</span> </div>
    </div>
    <div className="address">
        <h1>Delivery Address</h1>
        <div className="select">
            <h1>Select Delivery Address</h1>
            <h2>Add new Address</h2>
            <button>Add new</button>
            <div className="new-address">
            <input type="text"  placeholder="Street" value={state.street} onChange={(e)=>{dispatch({type:"STREET CHANGE",payload:e.target.value})}} />
            <input type="text" placeholder="City" value={state.city} onChange={(e)=>{dispatch({type:"CITY_CHANGE",payload:e.target.value})}} />
            <input type="text" placeholder="Zipcode" value={state.zipcode} onChange={(e)=>{dispatch({type:"ZIPCODE_CHANGE",payload:e.target.value})}} />
            <input type="text" placeholder="State" value={state.state} onChange={(e)=>{dispatch({type:"STATE_CHANGE",payload:e.target.value})}} />
            <input type="text" placeholder="Country" value={state.country} onChange={(e)=>{dispatch({type:"COUNTRY_CHANGE",payload:e.target.value})}} />
            <input type="text" placeholder="Mobile Number" value={state.number} onChange={(e)=>{dispatch({type:"NUMBER_CHANGE",payload:e.target.value})}} />
            <button>add</button>
        </div>
        </div>
    </div>
    <div className="payment">
       <h1>Payment</h1> 
       <button>Proceed to pay</button>
    </div>
    </>
    )
}
export default Checkout;