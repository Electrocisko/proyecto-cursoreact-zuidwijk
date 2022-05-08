import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from '../../Assets/Productos/Productos';
import { useParams } from 'react-router-dom';


function ItemDetailContainer(props) {

    const {id} = useParams();
    const[producto,setProducto] = useState([]);

   useEffect(()=>{
    let productoAMostrar = productos.find(dato=> dato.id===id);
    setProducto(productoAMostrar);
   },[]);


    return (
        <div className='container-product-detail'>
            <ItemDetail item={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;