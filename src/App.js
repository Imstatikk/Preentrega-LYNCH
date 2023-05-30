
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from './components/Error404';
function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
    <Route path = {"/"} element = {<ItemListContainer/>}/>
    <Route path = {"/category/:id"} element = {<ItemListContainer/>}/>
    <Route path= {"/item/:id"} element = {<ItemDetailContainer/>}/>
    <Route path={"/*"} element ={<Error404/>}/>
    </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
