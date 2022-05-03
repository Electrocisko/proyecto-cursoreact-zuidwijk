import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from '../../Assets/Productos/Productos';
import { useParams } from 'react-router-dom';


function ItemDetailContainer(props) {

    const {id} = useParams();
    
    let productoAMostrar = productos.find(dato=> dato.id===id);
   
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