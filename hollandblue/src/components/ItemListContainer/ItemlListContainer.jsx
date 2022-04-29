import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import productos from '../../Assets/Productos/Productos';

let listaProductos = productos;

function ItemlListContainer(props) {

    const pedirProductos = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve(listaProductos)},2000);
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