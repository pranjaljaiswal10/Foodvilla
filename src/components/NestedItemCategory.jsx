import { useState } from "react";
import ItemMenu from "./ItemMenu";
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai";
const NestedItemCategory=({categories,title})=>{
    return(
  <>
<h1>{title}</h1>
{
   categories.map((item,index)=>{
  return( 
      <NestedItemList  {...item} key={index}/>
   )
    })  
}
  </>
 )
}
export default NestedItemCategory;

const NestedItemList=({itemCards,title})=>{
  const [isOpen,setIsOpen]=useState(true);
    const handleClick=()=>{
        setIsOpen(!isOpen)
     }
    return(  
 <>
 <div onClick={handleClick}>{title}({itemCards.length}) <span>{isOpen?<AiOutlineUp/>:<AiOutlineDown/> }</span> </div>
      {isOpen&& itemCards.map(item=>{
        return( 
        <ItemMenu {...item?.card?.info} key={item?.card?.info?.id}/>
       )
      })
}
</>
      )
}
