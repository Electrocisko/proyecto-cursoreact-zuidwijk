
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemlListContainer from './components/ItemListContainer/ItemlListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import{ Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import ItemPage from './Pages/ItemPage';




function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path='/item/:id' element={<ItemPage/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>


    </div>
    
    </>
  );
}

export default App;
