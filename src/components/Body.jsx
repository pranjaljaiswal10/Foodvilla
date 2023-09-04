import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import { IMG_CDN_URL,SWIGGY_API_URL } from "../utils/constant";
const Body=()=>{
 const [allRestaurant,setAllRestaurant]=useState([])
 const [filterRestaurant,setFilteredRestaurant]=useState([])
 let res=[];
  useEffect(()=>{
  getData()
  },[])
  async function getData(){
    const response=await fetch(SWIGGY_API_URL);
    const json=await response.json();
    for(let i=0;i<json.data.cards.length;i++)
  {
    if(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants!==undefined)
    {
      res.push(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  }
  setAllRestaurant(res[0]);
  setFilteredRestaurant(res[0])
  }
  if(!allRestaurant) return null;
  {console.log(allRestaurant)}
  return filterRestaurant.length===0?(<h1>Data is loading...</h1>):(
    <div className="restaurant-list">
    {filterRestaurant.map(restaurant=>{
      return(
       
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
        <RestaurantCard {...restaurant.info} />
        </Link>
      )
    })
  }
    </div>
  )


}
export default Body;

const RestaurantCard=({cloudinaryImageId,avgRating,name,cuisines,areaName})=>{
return(
  <div className="card">
    <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
    <h1>{name}</h1>
    <p>{cuisines.join(",")}</p>
    <h2>{avgRating}</h2>
    <span>{areaName}</span>
    
  </div>
)
}