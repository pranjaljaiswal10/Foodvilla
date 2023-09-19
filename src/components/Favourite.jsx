import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import {AiFillStar} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../utils/favouriteSlice";
const Favourite=()=>{
    const favouriteItem=useSelector(store=>store.favouriteFood.favourite)
    console.log(favouriteItem);
    
     return(
     <>
 <h1>Favourite Restaurants({favouriteItem.length})</h1>
 <div className="favouritelist">
 {
favouriteItem.map(item=>{
    return(
        <Link to={`/restaurant/${item.id}`} key={item.id}>
    <RestaurantCard  {...item}/>
    </Link>
    )
})
 }
 </div>
     </>
     )
}
export default Favourite;
const RestaurantCard=({cloudinaryImageId,avgRating,name,cuisines,areaName,id})=>{
    const dispatch=useDispatch()
    const handleremove=(e)=>{
        e.target.id=id
        e.preventDefault()   
        dispatch(removeFromFavourite(e.target.id))
    }
    return(
      <div className="card">
        <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt={name} />
        <div>{name}</div>
        <p>{cuisines.join(",")}</p>
        <div><AiFillStar/> {avgRating}</div>
        <span>{areaName}</span>
        <button onClick={(e)=>{handleremove(e)}}>remove</button> 
      </div>
    ) 
    }
   
