import { useState } from "react"
import "../Checkout/CheckoutStyles.css"
import { useCartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("")
    const { cart, sumaTotal, removeProduct, totalProductos } = useCartContext()


    const generarOrden = () => {
        if (nombre.length < 1) {
            return false
        }
        if (email.length < 1) {
            return false
        }
        if (telefono.length < 1) {
            return false
        }
        const buyer = { name: nombre, phone: telefono, email: email }
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio * item.cantidad, quantity: item.cantidad }))
        const fecha = new Date()
        const date = `${fecha.toDateString()} ${fecha.getHours()}:${fecha.getMinutes()}`
        const total = sumaTotal()
        const order = { buyer: buyer, items: items, date: date, total: total }

        const db = getFirestore()
        const OrdersCollection = collection(db, "orders")
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id)
        }).catch(resultado => {
            console.log("no se pudo realizar la compra");
        }
        )
    }
    if (totalProductos() === 0) {
        return <div>
            <div className="alert alert-danger my-5" role="alert">
                No se encontraron productos!
            </div>
        </div>
    }
    return (
        <>
            <div>
                <h1>Productos seleccionados</h1>
                <div>
                    <div>
                        {cart.map(items => <div key={items.id} className="productCartContainer">
                            <button className="buttonSize" onClick={() => { removeProduct(items.id) }}>X</button>
                            <img src={items.img} alt="" width={80}></img>
                            <div>
                                <div>{items.nombre}</div>
                                <div>({items.cantidad})</div>
                                <div>${items.cantidad * items.precio}</div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="formularioCompra">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Nombre y apellido</label>
                        <input className="form-control inputPersona" onInput={(e) => setNombre(e.target.value)}></input>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Número de teléfono</label>
                        <input type="text" className="form-control inputDocumento" placeholder="Ej: 12345678" onInput={(e) => setTelefono(e.target.value)}></input>
                        <p className="errorInputD"></p>
                    </div>
                    <div className="col-12">
                        <span className="btn btn-primary btnConfirmar" onClick={generarOrden}>Confirmar Compra</span>
                        <p>Precio final:${sumaTotal()}</p>
                    </div>
                </form>
            </div>
            <div>
                {orderId ? <div className="alert alert-success" role="alert">
                    <p>Gracias por su compra!</p>
                    <p>Su orden de compra es: {orderId}</p>
                </div> : ""}
            </div>
        </>
    )
}
export default Checkout