import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import products from "../json/productos.json"

const ItemDetailContainer = ()=>{
   
   const [product, setProduct] = useState(null)
   const {id} = useParams()
   useEffect(()=>{
    const promesa2 = new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500);
    })
    promesa2.then(response =>{
        setProduct(response)
    })
    .catch(error =>{
        console.log(error);
    })
   }, [id])
   
    return (
    <div>
        <ItemDetail {...product}/>
    </div>
    )
}
export default ItemDetailContainer