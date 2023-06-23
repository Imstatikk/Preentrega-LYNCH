import { useEffect, useState } from 'react'
import '../styles.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {getFirestore,collection, getDocs, query, where} from "firebase/firestore"
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then(resultado=>{
            if(resultado.size > 0){
                setProducts(resultado.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            }
            else{
                console.log("error");
            }
         
         
        })
        
    }, [id])

    // useEffect(()=>{
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items")
    //     productos.forEach(producto =>{
    //         addDoc(itemsCollection, producto)
    //     });
    //     console.log("a");
    // },[])
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? productos.filter(item => item.categoria === id) : productos)
    //         }, 500);
    //     })
    //     promesa.then(response => {
    //         setProducts(response)
    //     })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [id])


    return (
        <div className='ItemListContainerStyle'>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer