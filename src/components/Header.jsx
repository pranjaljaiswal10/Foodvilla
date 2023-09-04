import {Link} from "react-router-dom"
import Search from "./search"
const Header = () => {
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
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/cart">Cart</Link> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;