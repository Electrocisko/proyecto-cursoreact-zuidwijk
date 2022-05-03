import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import productos from '../../Assets/Productos/Productos';


function ItemlListContainer(props) {
   
    const {id} = useParams();
    let listaProductos;

    //defino un ternario para cuando el id no esta definido muestre todos los productos
    id === undefined ? listaProductos=productos : listaProductos = productos.filter((dato)=>dato.categoryId === id);
   
    const pedirProductos = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve(listaProductos)},2000);
        })
    }
    
    const [items,setItem] = useState([]); 
  
    useEffect(()=>{
        pedirProductos()
        .then(items =>{ setItem(items)})
    },[id]);

    return (
        <>
        <div className='contenedor__productos'>
            <ItemList items={items}/>
        </div>
        </>
    );
}

export default ItemlListContainer;