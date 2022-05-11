import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import MyButton from '../MyButton/MyButton';
import CartContext from '../../Context/cart-context';



function ItemDetail({item}) {

    const[cantIngresar, setCantIngresar] = useState(0);

    const cartCtx = useContext(CartContext);

    let cantidadEnCarrito = cartCtx.getCartQuantity();

    
    function addHandler(cantIngresar) {
        console.log('addHandler'+ cantIngresar);
        cartCtx.addProducto({quantity: cantIngresar, ...item});
    }



  
    return (
        <div className='contenedor-detail'>
            <div className='contenedor-img-detail'>
                <img className='img-detail' src={item.pictureUrl} ></img>
            </div>
           

            <div className='contenedor-detail-texto'>
                <h1 className='detail-titel'>{item.title}</h1>
                <div className='detail-price'>
                    <h3 className='price'>{item.price}</h3>
                </div>
                <div className='detail-texto-data' >
                    <p>{item.description}</p>
                    <p>{item.measures}</p>
                    <p>{item.weight}</p>
                </div>
                <div >
                   
                    <MyButton item={item}  cantidad={cantidadEnCarrito} pathDestino={'/cart'} textoBoton={'Terminar Compra ' + cantidadEnCarrito + ' items' }></MyButton>
                    <MyButton item={item}  cantidad={cantidadEnCarrito} pathDestino={'/'} textoBoton={'Seguir comprando' }></MyButton>
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                    
                </div>
            </div>
           
        </div>
    );
}

export default ItemDetail;