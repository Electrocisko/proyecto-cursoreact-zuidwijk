
import './App.css';
import{ Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CategoryPage from './Pages/CategoryPage';
import ItemPage from './Pages/ItemPage';


function App() {
  return (
    <>
    <div className="App">
      
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
