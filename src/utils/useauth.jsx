import {createContext,useContext} from "react"
import {useNavigate,useLocation} from "react-router-dom"
const AuthContext=createContext()

const AuthProvider=({children})=>{

const navigate=useNavigate();
const location=useLocation()
 
    const handleLogin=async()=>{
        const response=await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'kminchelle',
            password: '0lelplR',
          })
        })
        const json=await response.json();
        localStorage.setItem("user",JSON.stringify(json))
         const origin=location.state?.from?.pathname|| "/"
        navigate(origin);
      }
      const handleLogout=()=>{
        localStorage.removeItem("user");
        navigate("/")
      }
      const user=(localStorage.getItem("user"));
      const userObject=JSON.parse(user);
    return(
        <AuthContext.Provider value={{userObject,handleLogin,handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext((AuthContext));

export {useAuth,AuthProvider}