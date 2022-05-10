import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import MyButton from '../MyButton/MyButton';

function ItemDetail({item}) {

    const[cantIngresar, setCantIngresar] = useState(0);

    function addHandler(quantityToAdd){
        setCantIngresar(quantityToAdd);
    };

  
    return (
        <div className='contenedor-detail'>
            <div className='contenedor-img-detail'>
                <img className='img-detail' src={item.pictureUrl} ></img>
            </div>
           

            <div className='contenedor-detail-texto'>
                <h1 className='detail-titel'>{item.title}</h1>
                <div className='detail-price'>
                    <h3 className='price'>{item.price}</h3>
                </div>
                <div className='detail-texto-data' >
                    <p>{item.description}</p>
                    <p>{item.measures}</p>
                    <p>{item.weight}</p>
                </div>
                <div >
                    {cantIngresar ?
                         <MyButton item={item}  cantidad={cantIngresar} pathDestino={'/cart'} textoBoton={'Terminar Compra ' + cantIngresar + ' items' }></MyButton>:
                         <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;