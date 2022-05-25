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

    
    let controlDeStock = localStorage.getItem(item.id) // Recupero el stock que tiene desde el localstorage
    let mostrartBoton;
    
    //Cuando ingreso un producto seguirComprando es falso, pero habilito otro boton para cambiar su estado para seguir comprando
    function addHandler(cantIngresar) {
        cartCtx.addProducto({quantity: cantIngresar, ...item});
        if(controlDeStock <=1) {controlDeStock=0}
        else{
            controlDeStock = controlDeStock-cantIngresar; 
            localStorage.setItem(item.id,controlDeStock)
        }
        setSeguirComprando(false);
    }

    if (seguirComprando) {
        mostrartBoton = <div className='container-button-continue'>
                            <ItemCount initial={1} stock={controlDeStock} onAdd={addHandler} /> 
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

