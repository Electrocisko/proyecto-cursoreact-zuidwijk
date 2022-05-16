import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore'


function ItemlListContainer(props) {
   
    const {id} = useParams();
    let q;
    let categoria = id;

    const db = getFirestore();
    const itemsCollection = collection(db, 'items')

    if ( categoria === undefined){
        q = itemsCollection;
        categoria = 'Productos'
    }
    else {
        q = query( itemsCollection , where('categoryId', '==',categoria),limit(50));
    } 
         
    const [items,setItem] = useState([]);  
 
    useEffect(()=>{
        getDocs(q)
        .then(snapshot =>{
            setItem(snapshot.docs.map(doc => {
                 return { ...doc.data(), id: doc.id}
                }));
        })
        .catch(
            err=>{
                console.log(err)
            }
        )


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