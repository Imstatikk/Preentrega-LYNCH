import { useState } from "react"
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../context/CartContext.jsx"
import { Link } from "react-router-dom"


const ItemDetail = ({ id, nombre, img, precio, stock }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { addProduct } = useCartContext()

    const modAgregar = (cantidad) => {
        setCantidadAgregada(cantidad)
        addProduct({ id, nombre, img, precio, stock }, cantidad)
    }
    return (
        <article className="containerDetailItem">
            <div className="containerCardItem">
                <header>
                    <h2 className="fontSizeItem">
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img className="sizeImgItem" src={img} alt={nombre} />
                </picture>
            </div>
            <footer className="marginFooterItem">
                <section>
                    <p className="fontSizeTwoItem">Precio: ${precio}</p>
                    <p className="fontSizeTwoItem">Stock: {stock}</p>
                </section>
                {
                    cantidadAgregada > 0 ? (<Link to="/cart" >Terminar compra </Link>) :
                        <ItemCount initial={1} stock={stock} onAdd={modAgregar} />
                }
            </footer>
        </article>

    )
}
export default ItemDetail