import CartWidget from "../CartWidget/CartWidget"
import "../styles.css"
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="navBarStyle">
            <CartWidget></CartWidget>
            <h1 className="fontTitle">TLTS</h1>
            <div>
                <NavLink className="buttonsNavBar" to="/category/Pantalones">
                    Pantalones
                </NavLink>
                <NavLink className="buttonsNavBar" to="/category/Camperas">
                    Camperas
                </NavLink>
                <NavLink className="buttonsNavBar" to="/category/Bermudas">
                    Bermudas
                </NavLink>
            </div>
        </nav>
    )
}
export default NavBar