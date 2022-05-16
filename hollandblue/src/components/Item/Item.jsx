import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({item}) {


    console.log(`Item ${item.title}`);

    //A la imagen y titulo le agregue un Link para ver el detalle
    return (    
        <div className='productos'>
            <div className='productos__card'>
                <Link className='link' to={'/item/' + item.id} > <h3 className='productos__card__title'>{item.title}</h3></Link>
                <Link to={'/item/' + item.id} > <img src={item.pictureUrl} alt={item.title} width="100%" className='card__img'/></Link> 
                <p className='productos__description'>{item.description}</p>  
                <p className='productos__card__precio'>${item.price}</p>            
            </div>
        </div>
    );
}

export default Item;