import { Link } from "react-router-dom"
import "../Item/Item.css"
const Item = ({ id, nombre, img, precio, stock }) => {
    return (
        <article className="containerItem">
            <div className="containerCard">
                <header>
                    <h2 className="fontSize">
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img className="sizeImg" src={img} alt={nombre} />
                </picture>
                <section>
                    <p className="fontSizeTwo">Precio: ${precio}</p>
                    <p className="fontSizeTwo">Stock: {stock}</p>
                </section>
                <footer className="marginFooter">
                    <Link to={"/item/" + id} className="detalleButton" >ver detalle</Link>
                </footer>
            </div>
        </article>

    )
}
export default Item