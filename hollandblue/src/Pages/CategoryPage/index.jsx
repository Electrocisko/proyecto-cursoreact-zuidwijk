import React, { useEffect } from 'react';
import ItemlListContainer from '../../components/ItemListContainer/ItemlListContainer';
import productos from '../../Assets/Productos/Productos';
import { useParams } from 'react-router-dom';

function CategoryPage(props) {

    const {id} = useParams();

    useEffect(()=>{
        console.log('recibido de ',id);
        
    },[id]
    )

    // filtro el listado por categoria con el useparams id
    let listaProductos = productos.filter((dato)=>dato.categoryId === id);

    return (
        <div>
            <ItemlListContainer items={listaProductos}/>
        </div>
    );
}

export default CategoryPage;