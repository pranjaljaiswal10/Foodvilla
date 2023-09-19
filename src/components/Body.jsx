import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import { IMG_CDN_URL,SWIGGY_API_URL } from "../utils/constant";
import {AiFillStar} from "react-icons/ai"
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import useApplyFiter from "../utils/useAppfilter";
const Body=()=>{
  const [image,setImage]=useState([])
 const [allRestaurant,setAllRestaurant]=useState([])
 const searchRestaurant=useApplyFiter(allRestaurant)
 console.log(searchRestaurant)
 let res=[];
  useEffect(()=>{
  getData()
  },[])
  async function getData(){
    const response=await fetch(SWIGGY_API_URL);
    const json=await response.json();
    console.log(json)
    for(let i=0;i<json.data.cards.length;i++)
  {
    if(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants!==undefined)
    {
      res.push(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  }
  setImage(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  setAllRestaurant(res[0]);
  }
  if(!allRestaurant) return null;
 
  if(allRestaurant.length==0) return <><Filter/><Shimmer/></>
  
  return searchRestaurant.length===0?(<><Filter/>
  <h1>No match Found</h1></>):(
    <div >
        <Filter/> 
    <div className="restaurant-list">


    {searchRestaurant.map(restaurant=>{
      return(
       
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
        <RestaurantCard {...restaurant.info} />
        </Link>
      )
    })
  }
    </div>
    </div>
  )
}
export default Body;

const RestaurantCard=({cloudinaryImageId,avgRating,name,cuisines,areaName})=>{
return(
  <div className="card">
    <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
    <div>{name}</div>
    <p>{cuisines.join(",")}</p>
    <div><AiFillStar/> {avgRating}</div>
    <span>{areaName}</span> 
    
  </div>
)
}