import React from 'react';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';


function ItemList({items}) {
    return (
       
        <div className='contenedor__productos'>
            {items.map((item)=> <Item item={item} key={item.id}/>)}
        </div>
       
    );
}

export default ItemList;