import { useAuth } from "../utils/useauth";
const Profile=()=>{
    const {userObject,handleLogout}=useAuth()
    return(
<>
  <p>UserName:{userObject.username}</p>
  <p>Email:{userObject.email}</p>
  <button onClick={handleLogout}>logout</button>
</>
    )
}
export default Profile;