import React from 'react';
import  './Button.css'
import { Link } from 'react-router-dom';


function MyButton({pathDestino,textoBoton}) {




    return (
        <div>
            <Link className='link-personalizado' to={pathDestino}>
                <button  className='boton-personalizado'>{textoBoton} </button>
            </Link> 
        </div>
    );
}

export default MyButton;