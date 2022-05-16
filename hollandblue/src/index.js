import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{BrowserRouter} from 'react-router-dom';
import {CartContextProvider} from './Context/cart-context'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHtDiNp8XeD0D-cN4IHIF40d5eA_BYQqc",
  authDomain: "blue-holland.firebaseapp.com",
  projectId: "blue-holland",
  storageBucket: "blue-holland.appspot.com",
  messagingSenderId: "742050620741",
  appId: "1:742050620741:web:170f2f5281bd3d3e6a8a2c"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);


