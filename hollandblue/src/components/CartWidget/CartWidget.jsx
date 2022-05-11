import React, { useContext } from 'react';
import CartContext from '../../Context/cart-context';


const CartWidget = (props) => {

    const {productos} = useContext(CartContext)
    const cartCtx = useContext(CartContext);

   console.log(`cart ${productos.length}`)
   console.log(productos)
   
   let cantEnCarrito = cartCtx.getCartQuantity()

    return (
        <div>
           <i className="fa-solid fa-cart-shopping fa-2x"></i>
           <span>{cantEnCarrito}</span>
        </div>
    );  
};

export default CartWidget;