import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore'


function ItemlListContainer(props) {
   
    const {id} = useParams();
    let q;
    let categoria = id;

    const [load,setLoad]= useState(false);

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
        setLoad(true);
        getDocs(q)
        .then(snapshot =>{
            setLoad(false);
            setItem(snapshot.docs.map(doc => {
                 return { ...doc.data(), id: doc.id}
                }));
                
        })
        .catch(
            err=>{
                console.log(err)
            }
        )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    return (

        load? <><div className='spinner'><h3>Cargando...</h3></div></>:
        <>
        <h2 className='cat-title'>{categoria}</h2>
        <div className='contenedor__productos'>
            <ItemList items={items} category={categoria}/>
        </div>
        </>
    );
}

export default ItemlListContainer;