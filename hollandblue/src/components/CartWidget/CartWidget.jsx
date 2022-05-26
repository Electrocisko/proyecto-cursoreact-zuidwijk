import React, { useContext } from "react";
import CartContext from "../../Context/cart-context";

const CartWidget = (props) => {
  const cartCtx = useContext(CartContext);

  let cantEnCarrito = cartCtx.getCartQuantity();

  return (
    <div>
      <i className="fa-solid fa-cart-shopping fa-2x"></i>
      <span>{cantEnCarrito}</span>
    </div>
  );
};

export default CartWidget;
