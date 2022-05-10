import React, { useContext } from 'react';
import  './Button.css'
import { Link } from 'react-router-dom';
import CartContext from '../../Context/cart-context'




function MyButton({pathDestino,textoBoton,item,cantidad }) {

    const {addProducto} = useContext(CartContext);


    return (
        <div>
            <Link className='link-personalizado' to={pathDestino}>  link </Link>

            <button onClick={()=>addProducto(item)} className='boton-personalizado'>{textoBoton}</button>
              
        </div>
    );
}

export default MyButton;