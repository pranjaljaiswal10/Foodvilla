import { useFilter } from "../utils/useFilter";
import {BiSearch} from "react-icons/bi"
const Search=()=>{
    const {filterState,filterDispatch}=useFilter()
    
    return(
        <div className="search">
        <input type="text" placeholder="Search for restaurant " value={filterState.searchTxt} onChange={(e)=>{filterDispatch({type:"SEARCH",payload:e.target.value})}} />
        <span><BiSearch/></span>
     </div>
    )
}
export default Search;