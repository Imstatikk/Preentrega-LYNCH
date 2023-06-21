import carritoImg from "./carrito/carrito.png"
import "../styles.css"
import icon from "./carrito/icon.png"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
const CartWidget = () => {
    const {totalProductos} = useCartContext()
    return (
        <div className="iconContainer">
            <Link to={"/"}><img src={icon} className="iconTienda" alt="Imagen no disponible"></img></Link>    
            { (totalProductos() > 0) ?
            <div className="iconCartContainer">
                <Link to={"/cart"}><img src={carritoImg} className="iconCarrito" alt="Imagen no disponible"></img></Link>
                    <p>{totalProductos()}</p>              
            </div> : " " }
           
        </div> 
        
    )
}
export default CartWidget
