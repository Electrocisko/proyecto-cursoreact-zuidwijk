import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import MyButton from '../MyButton/MyButton';
import CartContext from '../../Context/cart-context';
import { Link } from 'react-router-dom';


function ItemDetail({item}) {

  // Creo un estado booleano para seguir comprando
    const[seguirComprando,setSeguirComprando] = useState(true);

    const cartCtx = useContext(CartContext);
    let cantidadEnCarrito = cartCtx.getCartQuantity();
    let mostrartBoton;

    //Cuando ingreso un producto seguirComprando es falso, pero habilito otro boton para cambiar su estado para seguir comprando
    function addHandler(cantIngresar) {
        cartCtx.addProducto({quantity: cantIngresar, ...item});
        if(item.stock <=1) {item.stock=0}
        else{
            item.stock = item.stock-cantIngresar; 
        }
        setSeguirComprando(false);
    }

    if (seguirComprando) {
        mostrartBoton = <div className='container-button-continue'>
                            <ItemCount initial={1} stock={item.stock} onAdd={addHandler} /> 
                            <Link className='link-arrow' to='../'><i className="fa-solid fa-arrow-left fa-2x"></i></Link>
                        </div>

      } else {
        mostrartBoton = 
        <div className='container-button-itemdetail'>
            <MyButton item={item}  cantidad={cantidadEnCarrito} pathDestino={'/'} textoBoton={'Seguir comprando' }></MyButton>
            <MyButton item={item}  cantidad={cantidadEnCarrito} pathDestino={'/cart'} textoBoton={'Terminar Compra ' + cantidadEnCarrito + ' U' }></MyButton>
        </div>
      }
 
  
        return (
            <div className='contenedor-detail'>
                <div className='contenedor-img-detail'>
                    <img className='img-detail' src={item.pictureUrl} alt={item.title} ></img>
                </div>
    
                <div className='contenedor-detail-texto'>
                    <h1 className='detail-titel'>{item.title}</h1>
                    <div className='detail-price'>
                        <h3 className='price'>${item.price}</h3>
                        <img className='img-detail-responsive' src={item.pictureUrl} alt={item.title} ></img>
                    </div>
                    <div className='detail-texto-data'>
                        <p>{item.description}</p>
                        <p>{item.measures}</p>
                        <p>{item.weight}</p>
                    </div>
                    
                    <div >
                       {mostrartBoton}  
                    </div>
                </div>
            </div>)
    }

export default ItemDetail;

