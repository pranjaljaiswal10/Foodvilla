import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
import { removeFromCart } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";
import usePayment from "./payment";
const Cart=()=>{
   const navigate=useNavigate();
   const dispatch=useDispatch()
    const cartItems=useSelector(store=>store.foodCart.cart)
    const charges={
        delivery:20,
      gst:12.75,
    }
    const itemTotal=cartItems.reduce((total,item)=>{
  return total+((item.price/100)*item.quantity)
    },0)
    const quantity=cartItems.reduce((total,item)=>total+item.quantity,0)
    const totalGst=charges.gst*quantity;
    const totalPayment=itemTotal+charges.delivery+totalGst;
    const launchRazorPay=usePayment(totalPayment)
    const handleCheckout=()=>{
      launchRazorPay()
     dispatch(clearCart())
    }
    console.log(cartItems);
     return(
    cartItems.length===0?(
        <div className="empty-cart">
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
            <h1>Your cart is empty</h1>
            <p>You can go to home page to view more restaurants</p>
            <button onClick={()=>{navigate("/")}}>SEE RESTAURANT NEEAR YOU</button>
        </div>
    ):(
        <>
      <div className="cart-info">
       
      <h1>Cart</h1>
    <span>{cartItems.length} Items</span>
      {
        cartItems.map((item,index)=>{
        return(
            <div className="cart-card"  key={index}>
                  
            <FoodItem {...item}/>
        </div>
        )
    } )
}
<hr/>
<span>Bill Detail</span>
<div className="bill-detail">
  <div className="detail"><div className="flex">Item total</div><span>{itemTotal}</span></div>
  <div className="detail"><div className="flex">Delivery fees</div><span>{charges.delivery}</span></div>
  <div className="detail"><div className="flex">G.S.T. and Restaurant Charges </div><span>{totalGst}</span></div>
  
  
 
  <hr />
  <div className="detail"><div className="flex">TO PAY</div><span>{Math.round(totalPayment)}</span></div>
  
  <div><button onClick={handleCheckout}>CheckOut</button></div>
</div>
</div>
</>
)
    )
 }
export default Cart;

const FoodItem=({name,quantity,price,id})=>{
    const dispatch=useDispatch();
     return(
        <div className="detail">
    <div className="flex">
    {name}
    </div>
    <span className="btn">
     {quantity===1?<button  onClick={()=>{dispatch(removeFromCart(id))}}>-</button>
     :<button onClick={()=>{dispatch(decreaseQuantity(id))}}>-</button>}
    <span>{quantity}</span>
    <button onClick={()=>{dispatch(increaseQuantity(id))}}>+</button>
    <span>&#8377;{(price/100)*quantity}</span>
    </span>
    </div>
    )
}

