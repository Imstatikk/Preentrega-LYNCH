import '../styles.css'

const ItemListContainer =({greeting})=>{
return (
    <div className='ItemListContainerStyle'>
        <h1>
            {greeting}
        </h1>
    </div>
)
}
export default ItemListContainer