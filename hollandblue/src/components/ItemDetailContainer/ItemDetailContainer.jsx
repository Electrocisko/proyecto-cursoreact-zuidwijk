import React, { useState, useEffect, } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const {id} = useParams();
    const[producto,setProducto] = useState([]);
    const db = getFirestore();
    const [load, setLoad] = useState(true);


    const getItem = async(idItem) =>{
        try {
            setLoad(true);
            const document = doc(db, "items", idItem);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};
           //cargo el stock del producto si no fue cargado antes no se modifica.
            localStorage.getItem(result.id)==null && localStorage.setItem(result.id, result.stock);
            setProducto(result);
            setLoad(false);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
       getItem(id);
    },[id])

    return (
        load? <><div className='spinner'><h3>Cargando...</h3></div></>:
        <div className='container-product-detail'>
            <ItemDetail item={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;