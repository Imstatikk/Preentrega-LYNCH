
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from './components/Error404.jsx';
import CartContextProvider from './components/context/CartContext.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div >
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/*"} element={<Error404 />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
