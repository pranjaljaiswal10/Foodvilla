import { ITEM_IMG_CDN_URL } from "../utils/constant";
import { addToCart } from "../utils/cartSlice";
import {useDispatch,useSelector} from "react-redux"
import { removeFromCart } from "../utils/cartSlice";
import { increaseQuantity } from "../utils/cartSlice";
import { decreaseQuantity } from "../utils/cartSlice";
const ItemMenu=({name,price,description,id,imageId,offerTags,defaultPrice})=>{
  const dispatch=useDispatch()
  const item={
    name:name,
    price:price,
    description:description,
    id:id,
    quantity:1
  }
  
const removeFoodItem=()=>{
  dispatch(removeFoodItem(id))
}

  const addFoodItem=(e)=>{
    e.target.id=item.id
    console.log(e.target.id)
    dispatch(addToCart(item))
  }
 const increaseFoodQuantity=()=>{
  dispatch(increaseQuantity(id))
 }
 
 const cartItem=useSelector(store=>store.foodCart.cart)
const isExist=cartItem.find(item=>item.id===id)



    return(
      <>
        <div className="dish-detail">
        <div className="dish">
        <h2>{name}</h2>
        <span style={{paddingRight:"1rem"}}>&#8377; {defaultPrice!==undefined?defaultPrice/100:price/100}</span>
        {offerTags!==undefined &&<span>|{`${offerTags[0].title}|${offerTags[0].subTitle}`}</span>}
        <p>{description}</p>
        </div>
        <div className="dish-image">
          <div>
       {imageId!==undefined && <img src={`${ITEM_IMG_CDN_URL}${imageId}`} alt="" />}
       </div>
       <div>
     {isExist!==undefined?<button onClick={increaseFoodQuantity}>add</button>:<button onClick={addFoodItem}>add</button>}
      
      </div>
      </div>
        </div>
        <hr />
        </>
    )
}
export default ItemMenu;