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
  console.log(carrito);

 
    return (
        <div>
          <h4>Cantidad de Items: {cantDeItems}</h4>
          <h4>Cantidad de Productos: {cantDeProductos}</h4>
          <ul className='lista'>
            {productosAmostrar.map(element =>
              <li >
                 <CartItem  item={element}/>
              </li>
            )}
          </ul>
          <div className='container-remove'>
            <button className='remove-items' onClick={()=>carrito.clear()}>Vaciar Carrito</button>
          </div>
         
        
        </div>
    );
}

export default Cart;