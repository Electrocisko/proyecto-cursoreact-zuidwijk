import React from 'react';
import productos from '../../Assets/Productos/Productos';
import './CartItem.css'

function CartItem({item}) {

 
    return (
        <div className='cart-container'>
           <div className='container-cart-img'>
               <img src={item.pictureUrl} alt={item.title} width="100%" className='card__img'/>
            </div>
           <div className='container-cart-title'>
                <h4 className='producto__cart__title'>{item.title}</h4>
            </div>
           <div className='container-cart-quantity'>
                <p className='producto__cart__quantity'>{item.quantity} u</p>
            </div>
            <div className='container-cart-precio'>
                <p className='producto__cart__precio'>${item.price}</p>
            </div>    
        </div>
    );
}

export default CartItem;