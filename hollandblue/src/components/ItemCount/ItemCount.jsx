import React, { useState,  } from 'react';
import  './ItemCount.css'



function ItemCount(props) {

    let stock = props.stock;
    let initial = props.initial;

    const [count,setCount] = useState(initial);
    const sumar = ()=> setCount(count+1);
    const restar = ()=>setCount(count-1);
   
    return (
        <div className='contenedor'>
            <div className='card'>
               <div className='stock-text'>Stock: {stock}</div>
                <div className='contenedor__botones'>
                    <button className='boton card__boton' onClick={count > 1 && restar}><i class="fa-solid fa-minus"></i></button>
                    <input className='card__stock' readOnly value={count} />
                    <button className='boton card__boton' onClick={count <stock && sumar}><i class="fa-solid fa-plus"></i></button> 
                </div>
                <button className='boton-agregar' onClick={props.onAdd}>Agregar carrito</button>
            </div>
        </div>
     
    );
}

export default ItemCount;
