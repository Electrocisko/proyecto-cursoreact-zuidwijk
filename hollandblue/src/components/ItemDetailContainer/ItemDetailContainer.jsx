import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from '../../Assets/Productos/Productos';


let productoAMostrar = productos[4]; //Elegi un producto cualquiera para mostrar

function ItemDetailContainer(props) {

   const[producto,setProducto] = useState([]);

   const cargarProducto = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve(productoAMostrar)},2000)
        })
   }

   useEffect(()=>{
    cargarProducto()
        .then( item =>{setProducto(item)})
   },[]);


    return (
        <div className='container-product-detail'>
            <ItemDetail item={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;