
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlListContainer from './components/ItemListContainer/ItemlListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      {/* <ItemlListContainer/> */}
      <ItemDetailContainer/>
    </div>
    
    </>
  );
}

export default App;
