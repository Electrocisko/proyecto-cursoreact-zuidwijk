import React, { useContext } from 'react';
import './CartItem.css'
import CartContext from '../../Context/cart-context';


function CartItem({item}) {

    const productsInCart = useContext(CartContext);
    let controlDeStock = parseInt(localStorage.getItem(item.id));  // Recupero el stock que tiene desde el localstorage

    const removeUnitStorage = ()=>{
        productsInCart.removeOneUnit(item.id);
        localStorage.setItem(item.id,controlDeStock+1)
    }

    //Funcion que verifica si hay stock para agregar
    const addOneUnitStorage = ()=>{
        if (controlDeStock > 0){
            productsInCart.addOneUnit(item);
            localStorage.setItem(item.id,controlDeStock-1);
        }
        else{
            alert('No hay stock');
            controlDeStock=0;
        }   
    }

    const removerPorId = ()=> {
        productsInCart.removerPorId(item.id);
        localStorage.removeItem(item.id)
    }


    
    return (
        <div className='cart-container'>
           <div className='container-cart-img'>
               <img src={item.pictureUrl} alt={item.title} width="100%" className='card__img'/>
            </div>
           <div className='container-cart-title'>
                <h4 className='producto__cart__title'>{item.title}</h4>
            </div>
           <div className='container-cart-quantity'>
                <button className='cart-button' onClick={()=>removeUnitStorage()}><i className="fa-solid fa-minus"></i></button>
                <p className='producto__cart__quantity'>{item.quantity} U</p>
                <button className='cart-button' onClick={()=>addOneUnitStorage()}><i className="fa-solid fa-plus"></i></button>
                
            </div>
            <div className='container-cart-precio'>
                <p className='producto__cart__precio'>${(item.price * item.quantity).toLocaleString()} </p>
            </div>  
            <div className='container-trash'>
                <button className='cart-button' onClick={()=>removerPorId()}><i className="fa-solid fa-trash"></i></button>
            </div>  
          
        </div>
    );
}

export default CartItem;