import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({id, nombre,img,precio,stock})=>{
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
                <ItemCount initial={1} stock={stock} onAdd ={(cantidad) => console.log('cantidad agregada', cantidad)}/>
            </footer>
        </article>

    )
}
export default ItemDetail