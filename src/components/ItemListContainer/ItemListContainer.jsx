import { useEffect, useState } from 'react'
import '../styles.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import productos from "../json/productos.json"

const ItemListContainer =({greeting})=>{
const [products, setProducts] = useState([])
const {id} = useParams();

useEffect( ()=>{
const promesa = new Promise((resolve)=>{
    setTimeout(() => {
       resolve(id? productos.filter (item => item.categoria === id) : productos) 
    }, 500);
})
promesa.then(response =>{
    setProducts(response)
})
.catch(error =>{
    console.log(error);
})
}, [id])


return (
    <div className='ItemListContainerStyle'>
        <ItemList products={products}/>
    </div>
)
}
export default ItemListContainer