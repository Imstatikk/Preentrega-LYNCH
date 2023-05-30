import carritoImg from "./carrito/carrito.png"
import  "../styles.css"
import icon from "./carrito/icon.png"
import { Link } from "react-router-dom"
const CartWidget = ()=>{
    return (
<div className="carritoDiv">
<Link to ={"/"}><img src = {icon} className="iconTienda" alt = "Imagen no disponible"></img></Link>
<img src={carritoImg} className="iconCarrito" alt = "Imagen no disponible"></img>
<p>0</p>
</div>
    )
    }
export default  CartWidget
