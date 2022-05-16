import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore'



function ItemDetailContainer(props) {

    const {id} = useParams();
    const[producto,setProducto] = useState([]);
  

//    useEffect(()=>{
//     let productoAMostrar = productos.find(dato=> dato.id===id);
//     setProducto(productoAMostrar);
//    },[]);

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, 'items')

        const q = query( itemsCollection , where('price', '==',900),limit(50));


        getDocs(q)
        .then(snapshot =>{
            setProducto(snapshot.docs.map(doc => {
                 return { ...doc.data(), id: doc.id}
                }));
        })
        .catch(
            err=>{
                console.log(err)
            }
        )


    },[])

    console.log(`Item detail ${producto}`)
    return (
      
        <div className='container-product-detail'>
            <ItemDetail item={producto}></ItemDetail>
        </div>
    );
}

export default ItemDetailContainer;