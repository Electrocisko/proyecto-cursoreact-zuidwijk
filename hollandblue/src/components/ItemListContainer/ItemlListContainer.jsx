import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemlListContainer(props) {

    const onAdd = ()=>{
        console.log("Agregado a carrito");
    }


    return (
        <div className='contenedor'>
           <ItemCount stock={10} initial={3} onAdd={onAdd}/>
        </div>
    );
}

export default ItemlListContainer;