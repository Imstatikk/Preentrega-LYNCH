import { useState } from "react"
import '../ItemCount/ItemCount.css'

const ItemCount = ({stock,initial,onAdd})=>{

    const [cantidad, setCantidad] = useState(initial)
const incrementar = ()=>{
    if(cantidad < stock){
        setCantidad(cantidad + 1)
    }
}

const decrement = ()=>{
    if(cantidad > 1){
        setCantidad(cantidad - 1)

    }
}
return (
    <div className="containerButtonsCarrito">
<div className="styleCount" >
    <button className= "sizeButton" onClick = {decrement}>-</button>
    <p>{cantidad}</p>
    <button className= "sizeButton" onClick = {incrementar}>+</button>
</div>
<div>
    <button  className= "agregarcButton" onClick = {() => onAdd(cantidad)} disabled={!stock}>
    Agregar a carrito
    </button>
</div>

</div>
)
}
export default ItemCount