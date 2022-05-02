import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';


function ItemlListContainer(props) {
    console.log(props.items);

 
    const pedirProductos = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve(props.items)},2000);
        })
    }
    
    const [productos,setProductos] = useState([]); 
  
    useEffect(()=>{
        pedirProductos()
        .then(items =>{ setProductos(items)})
    },[]);

    return (
        <>
        <div className='contenedor__productos'>
            <ItemList items={productos}/>
        </div>
        </>
    );
}

export default ItemlListContainer;