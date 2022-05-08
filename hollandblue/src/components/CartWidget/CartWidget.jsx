import React from 'react';

const CartWidget = (props) => {
    return (
        <div>
           <i className="fa-solid fa-cart-shopping fa-2x"></i>
           <span>{props.cant}</span>
        </div>
    );
};

export default CartWidget;