import { useState, useContext } from 'react'
import React from "react"
const CartContext = React.createContext('')

export const useCartContext = () => useContext(CartContext);



const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProduct = (item, nuevaCantidad) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, cantidad: nuevaCantidad })
        setCart(newCart)
        console.log(newCart);
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))


    const totalProductos = () => {
        return cart.reduce((acc, item) => acc += item.cantidad, 0)
    }
    const sumaTotal = () => {
        return cart.reduce((acc, item) => acc += item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{ sumaTotal, totalProductos, cart, clearCart, isInCart, removeProduct, addProduct }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartContextProvider
