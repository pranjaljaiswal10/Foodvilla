import {Link} from "react-router-dom"
import Search from "./search";
import { useAuth } from "../utils/useauth";
import { useSelector } from "react-redux";
import {MdFavorite} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
const Header = () => {
    const {userObject}=useAuth()
    const cartItems=useSelector(store=>store.foodCart.cart)
    return (
        <div className="header">
            <span className="logo">
                <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgmeS5gZETpqMgposOpgZvl7YlWxk5dPBaA&usqp=CAU" alt="foodvilla" />
                <h1>FoodVilla</h1>
            </Link>
            </span>
            <Search />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>{userObject?<Link to="/profile">Profile</Link>:<Link to="/login">Login</Link>}</li>
                    <li><Link to="/favourite"><MdFavorite/></Link></li>
                    <li><Link to="/cart">{cartItems.length}<AiOutlineShoppingCart/></Link> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;