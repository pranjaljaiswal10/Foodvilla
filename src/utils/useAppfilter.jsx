import { useFilter } from "./useFilter";
const useApplyFiter=(allRestaurant)=>{
    const {filterState}=useFilter()
    let filterRestaurant=[...allRestaurant]
 const filterRating=filterState.rating?filterRestaurant.filter(item=>item.info.avgRatingString>"4.0"):filterRestaurant
 const filterVeg=filterState.veg?filterRating.filter(item=>item.info.veg!==undefined):filterRating;
 const filterNonVeg=filterState.nonVeg?filterVeg.filter(item=>item.info.veg===undefined):filterVeg;
 const filterOffer=filterState.offer?filterNonVeg.filter(item=>{
    return item.info.aggregatedDiscountInfoV3!==undefined;
 }):filterNonVeg;
 const filterLess=filterState.priceLess?filterOffer.filter(item=>item.info.costForTwo.split(" ")[0]<"₹300"):filterOffer;
 const filterBetween=filterState.priceBetween?filterLess.filter(item=>{
    return item.info.costForTwo.split(" ")[0]>="₹300"&& item.info.costForTwo.split(" ")[0]<="₹600"
 }):filterLess;
   const searchRestaurant=filterState.searchTxt.trim()!==""?filterBetween.filter(item=>item.info.name.toLowerCase().includes(filterState.searchTxt.toLowerCase())):filterBetween;
   return searchRestaurant;
}
export default useApplyFiter;