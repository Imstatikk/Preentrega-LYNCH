import carritoImg from "./carrito/carrito.png"
import  "../styles.css"
const CartWidget = ()=>{
    return (
<div className="carritoDiv">
<img src={carritoImg} className="iconCarrito"></img>
<p>0</p>
</div>
    )
    }
export default  CartWidget