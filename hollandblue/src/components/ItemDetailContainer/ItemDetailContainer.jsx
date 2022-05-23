import React, { useState, useEffect, } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer(props) {

    const {id} = useParams();
    const[producto,setProducto] = useState([]);
    const db = getFirestore();
    const productoAmostrar = doc(db, 'items', id)
    const [load, setLoad] = useState(true);

    useEffect(()=>{
       
        getDoc(productoAmostrar)
        .then(snapshot =>{
            setLoad(false);
            setProducto({...snapshot.data(), id: snapshot.id} );
           
        })
        .catch(
            err=>{
                console.log(err)
            }
        )
    },[productoAmostrar])

    return (
        load? <><div className='spinner'><h3>Cargando...</h3></div></>:
        <div className='container-product-detail'>
            <ItemDetail item={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;