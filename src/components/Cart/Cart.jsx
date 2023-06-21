import { useCartContext } from "../context/CartContext";
import '../Cart/cartStyles.css'
const Cart = () => {
    const { cart, removeProduct, clearCart, sumaTotal, totalProductos } = useCartContext()
    if (totalProductos() === 0) {
        return <div>
            no se encontraron productos
        </div>
    }
    return <div className="cartContainer">
        <div className="productContainer">
            {cart.map(items => <div key={items} className="productCartContainer">
            <button className="buttonSize" onClick={()=>{removeProduct(items.id)}}>X</button>
                <img src={items.img} alt="" width={150}></img>
                <div>
                    <div>{items.nombre}</div>
                    <div>({items.cantidad})</div>
                    <div>${items.cantidad * items.precio}</div>
                </div>
            </div>
            )}
        </div>
        <div>
            <button className="buttonCloseCart" onClick={clearCart}>X</button>
            <p className="finalPrice">Precio final:${sumaTotal()}</p>
            <p className="finalPrice">Total productos: {totalProductos()}</p>
            <button className="payButton">PAGAR</button>
        </div>
    </div>
};
export default Cart