import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting={"Bienvenidos!"}></ItemListContainer>
    </>
  );
}

export default App;
