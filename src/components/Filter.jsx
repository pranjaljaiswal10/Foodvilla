import { useFilter } from "../utils/useFilter";
const Filter=()=>{
    const {filterState,filterDispatch}=useFilter()
 const handleRating=()=>{
   filterDispatch({type:"RATING"})
 }
 const handleOffer=()=>{
    filterDispatch({type:"OFFER"})
 }
 const handleVeg=()=>{
    filterDispatch({type:"VEG"})
 }
 const handleNonveg=()=>{
    filterDispatch({type:"NONVEG"})
 }
 const handleLess=()=>{
    filterDispatch({type:"LESS"})
 }   
 const handleBetween=()=>{
    filterDispatch({type:"BETWEEN"})
 }   
    return(
<>
<div className="filter">
<span className="filterbtn" onClick={handleRating} >Rating 4.0+ <span>{filterState.rating?"X":""}</span> </span>
<span className="filterbtn" onClick={handleVeg} >Pure veg <span>{filterState.veg?"X":""}</span></span>
<span className="filterbtn" onClick={handleNonveg} >Non-veg <span>{filterState.nonVeg?"X":""}</span></span>
<span className="filterbtn" onClick={handleOffer} >New Offer <span>{filterState.offer?"X":""}</span></span>
<span className="filterbtn" onClick={handleLess} >Less than Rs300 <span>{filterState.priceLess?"X":""}</span></span>
<span className="filterbtn" onClick={handleBetween} >Rs.300-Rs-600 <span>{filterState.priceBetween?"X":""}</span></span>
</div>
</>

)
}
export default Filter;