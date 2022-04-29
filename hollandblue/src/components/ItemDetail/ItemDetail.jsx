import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}) {

    const onAdd = ()=>{
        console.log("Agregado a carrito");
    }
  
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
                <div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
           
        </div>
    );
}

export default ItemDetail;