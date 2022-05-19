import React, { useContext } from 'react';
import CartContext from '../../Context/cart-context';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import MyButton from '../MyButton/MyButton';
import { Link } from 'react-router-dom';


function Cart(props) {

  const carrito = useContext(CartContext)
  let cantDeItems = carrito.productos.length;
  let cantDeProductos = carrito.getCartQuantity();
  let productosAmostrar = carrito.productos;
  let precioTotal = carrito.getTotalPrice();
  
  if(cantDeItems > 0){
      return (
        <>
        <div>
          {productosAmostrar.map((el, i) =><CartItem  item={el} key={i}/>)}
        </div>
        <div className='container-info-cart'>
          <h4>Cantidad de Items: {cantDeItems}</h4>
          <h4>Cantidad de Productos: {cantDeProductos}</h4>
          <h4>Precio Total: ${precioTotal.toLocaleString()}</h4>
        </div>
        <div className='container-remove'>
            <button className='remove-items' onClick={()=>carrito.clear()}>Vaciar Carrito</button>
           <Link className='link' to='/'><button className='remove-items'>Seguir Comprando</button></Link> 
           <Link className='link' to='/checkout'><button className='remove-items'>Terminar Compra</button></Link>
        </div>
        </>
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