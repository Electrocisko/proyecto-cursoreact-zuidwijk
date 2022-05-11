import React, { useContext } from 'react';
import CartContext from '../../Context/cart-context';



function Cart(props) {

  const carrito = useContext(CartContext)

  let cantDeItems = carrito.productos.length;
  let cantDeProductos = carrito.getCartQuantity();
  let productosAmostrar = carrito.productos
  console.log(carrito);

  productosAmostrar.forEach(element => {
    console.log(element.title)
  });
 
 
    return (
        <div>
          <h1>CART</h1>
          <h4>Cantidad de Items: {cantDeItems}</h4>
          <h4>Cantidad de Productos: {cantDeProductos}</h4>
          <ul>
            {productosAmostrar.map(element => <li>{element.title}s:  {element.quantity}
            <button onClick={()=>carrito.removerPorId(element.id)}>Remover item</button></li>
            )}
          </ul>
          <button onClick={()=>carrito.clear()}>Vaciar Carrito</button>
        </div>
    );
}

export default Cart;