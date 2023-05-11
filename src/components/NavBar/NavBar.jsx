import CartWidget from "../CartWidget/CartWidget"
import  "../styles.css"
const NavBar = ()=>{
    return (
        <nav className="navBarStyle">
            <CartWidget></CartWidget>
            <h1 className="fontTitle">TLTS</h1>
            <div>
        <button className="buttonsNavBar">
        Pantalones
        </button>
        <button className="buttonsNavBar">
        Remeras
        </button>
        <button className="buttonsNavBar">
        Camperas
        </button>
            </div>
        </nav>
    )
}
export default NavBar