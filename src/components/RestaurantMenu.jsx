import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { SWIGGY_ITEM_URL} from "../utils/constant";
import { useDispatch } from "react-redux";
import { addToFavourite } from "../utils/favouriteSlice";
import { useSelector } from "react-redux";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";
import {useNavigate} from "react-router-dom"
import { removeFromFavourite } from "../utils/favouriteSlice";

const RestaurantMenu=()=>{
   const favouriteItems=useSelector(store=>store.favouriteFood.favourite)
    const {id} =useParams();
    const dispatch=useDispatch();
    const cartItems=useSelector(store=>store.foodCart.cart)
   console.log(cartItems.length)
  const navigate=useNavigate();
  const [restaurant,setRestaurant]=useState(null);
  useEffect(()=>{
   getData();
  },[])
 async function getData(){
    const response=await fetch(`${SWIGGY_ITEM_URL}${id}`);
    const json=await response.json();
    setRestaurant(json.data)
 }
 if(restaurant===null) return <h1>Data is loading...</h1>
 const detail=restaurant?.cards[0]?.card?.card?.info
console.log(restaurant)

 const {cuisines,avgRatingString,name,areaName,costForTwoMessage,sla,totalRatingsString,city}=detail;
 const {cards}=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR; 
console.log(cards)

const isExist=favouriteItems.find(item=>item.id===detail.id)
const handleAddFavourite=(detail,e)=>{
   e.target.id=detail.id
  dispatch(addToFavourite(detail));
}
const handleRemoveFavourite=()=>{
   dispatch(removeFromFavourite(id))
}

 return(

   <div className="resmenu">
    <>
    <small onClick={()=>{navigate("/")}}>{`Home/${city}/${name}`}</small>
  <div className="resname">{name}</div> 
  <div className="resintro">
   <div className="ressubintro">
  <p>{cuisines.join(",")}</p>

 <p>{`${areaName},${sla.lastMileTravelString}`}</p>
 </div>
  <div className="rating">
  {isExist===undefined?<span onClick={(e)=>{handleAddFavourite(detail,e)}}>❤</span>:<span onClick={handleRemoveFavourite}>❤</span>}
 <hr />
    <span>&#9733;{avgRatingString}</span>
  <hr />
  <div>{totalRatingsString}</div>
  </div>
  </div> 
  <hr />
 <h2>{`${sla.slaString}| ${costForTwoMessage}`}</h2>
   </>
   <hr />
{
   cards.map((item,index)=>{
      return(
         <div className="list" key={index}>
         {item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?

        <ItemCategory {...item?.card?.card}  />
         :item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && <NestedItemCategory  {...item?.card?.card} />
         }
         </div>
      )
   })
}
   </div>
    )
     
}
export default RestaurantMenu;

