import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';



function Item({item}) {

    return (    
        <div className='productos'>
            <div className='productos__card'>
                <h3 className='productos__card__title'>{item.title}</h3>
                <img src={item.pictureUrl} alt="" width="100%" className='card__img'/> 
                <p className='productos__description'>{item.description}</p>  
                <p className='productos__card__precio'>Precio: ${item.price} AR</p>            
            </div>
        </div>
    );
}

export default Item;