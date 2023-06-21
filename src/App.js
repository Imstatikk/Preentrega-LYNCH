
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext'
function App() {
  return (
    <div >
        <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
         </CartContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
