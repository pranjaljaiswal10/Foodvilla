import { useState } from "react";
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai";
import ItemMenu from "./ItemMenu";
const ItemCategory=({itemCards,title})=>{
    const [isOpen,setIsOpen]=useState(true);
    const handleClick=()=>{
        setIsOpen(!isOpen)
     }
    return(
        <>
        <h1 onClick={handleClick}>{title}({itemCards.length}) <span>{isOpen?<AiOutlineUp/>:<AiOutlineDown/>}</span></h1>
{ isOpen&&itemCards.map(item=>{
    return(
        <ItemMenu  {...item?.card?.info} key={item?.card?.info?.id}/>
    )
} )
}
</>
    )  
}
export default ItemCategory;
