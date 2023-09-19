import {Navigate,useLocation} from "react-router-dom"
import { useAuth } from "../utils/useauth";
const PrivateRouter=({children})=>{
  const {userObject}=useAuth()
  const location=useLocation();
  if(!userObject)
  {
   return <Navigate to="/login"  replace state={{from:location}}/>
  }
  return children
}
export default PrivateRouter;