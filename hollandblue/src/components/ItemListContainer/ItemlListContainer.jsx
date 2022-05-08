import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import productos from '../../Assets/Productos/Productos';


function ItemlListContainer(props) {
   
    const {id} = useParams();
    let listaProductos;
    let categoria;
    
    //defino un ternario para cuando el id no esta definido muestre todos los productos
    id === undefined ? listaProductos=productos  : listaProductos = productos.filter((dato)=>dato.categoryId === id);
    id === undefined ? categoria = "PRODUCTOS" : categoria = id.toUpperCase();
       
    const [items,setItem] = useState([]);  
 
    useEffect(()=>{
        setItem(listaProductos);
    },[id])

    return (
        <>
        <h3>{categoria}</h3>
        <div className='contenedor__productos'>
            <ItemList items={items} category={categoria}/>
        </div>
        </>
    );
}

export default ItemlListContainer;