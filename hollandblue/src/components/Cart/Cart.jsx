import React, { useContext } from 'react';
import CartContext from '../../Context/cart-context';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import MyButton from '../MyButton/MyButton';


function Cart(props) {

  const carrito = useContext(CartContext)

  let cantDeItems = carrito.productos.length;
  let cantDeProductos = carrito.getCartQuantity();
  let productosAmostrar = carrito.productos
  
  if(cantDeItems > 0){
      return (
        <div>
          <h4>Cantidad de Items: {cantDeItems}</h4>
          <h4>Cantidad de Productos: {cantDeProductos}</h4>
            {productosAmostrar.map((el, i) =><CartItem  item={el} key={i}/>)}
          <div className='container-remove'>
            <button className='remove-items' onClick={()=>carrito.clear()}>Vaciar Carrito</button>
            <MyButton    pathDestino={'/'} textoBoton={'Seguir Comprando ' }></MyButton>
          </div>
        </div>
    );
  }
  else{
    return (
      <>
      <h1>Carrito Vacio</h1>
      <div className='container-remove'>
        <MyButton  pathDestino={'/'} textoBoton={'Seguir comprando' }></MyButton>
      </div>
      </>
      
    )
  }


 
   
}

export default Cart;