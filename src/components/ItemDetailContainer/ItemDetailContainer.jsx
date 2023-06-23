import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore, doc,getDoc } from "firebase/firestore"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "items", id);
        getDoc(queryDoc).then(resultado=>{
            setProduct({id:resultado.id, ...resultado.data()})
         
         
        })
        
    }, [id])

    // useEffect(() => {
    //     const promesa2 = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(products.find(prod => prod.id === id))
    //         }, 500);
    //     })
    //     promesa2.then(response => {
    //         setProduct(response)
    //     })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [id])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer