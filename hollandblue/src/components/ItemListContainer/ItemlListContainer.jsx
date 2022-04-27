import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../NavBar/ItemList/ItemList';
import productos from '../Productos/Productos';

let listaProductos = productos;

function ItemlListContainer(props) {

    const onAdd = ()=>{
        console.log("Agregado a carrito");
    }

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
        <div className='contenedor'>
           {/* <ItemCount stock={10} initial={3} onAdd={onAdd}/> */}
        </div>
        <br></br>
        <div className='contenedor__productos'>
            <ItemList items={productos}/> 
        </div>
        </>
    );
}

export default ItemlListContainer;