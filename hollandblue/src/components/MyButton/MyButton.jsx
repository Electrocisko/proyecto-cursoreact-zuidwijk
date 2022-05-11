import React, { useContext, } from 'react';
import  './Button.css'
import { Link } from 'react-router-dom';
import CartContext from '../../Context/cart-context'




function MyButton({pathDestino,textoBoton,item,cantidad }) {

    const {addProducto, getCartQuantity } = useContext(CartContext);

   console.log(getCartQuantity())


    return (
        <div>
            <Link className='link-personalizado' to={pathDestino}>
                <button  className='boton-personalizado'>{textoBoton} </button>
            </Link>

            
              
        </div>
    );
}

export default MyButton;