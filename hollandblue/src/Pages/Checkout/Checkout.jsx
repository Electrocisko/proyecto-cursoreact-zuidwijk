import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import NavBar from '../../components/NavBar/NavBar';
import CartContext from '../../Context/cart-context';
import './Checkout.css'



function Checkout(props) {

    const {productos, getTotalPrice, unitsPerProduct, clear } = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    const [load, setLoad] = useState(false);

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Telefono: '',
        Email: ''
    });

    const {nombre,telefono,email} = buyer;

    const handleInputChange = (e)=>{
        setBuyer(( {...buyer, [e.target.name]: e.target.value})) 
    };

    const upOrder = (data)=>{
        setLoad(true);
        const order = data;
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection,order)
        .then(({ id }) =>{
            setOrderId(id); 
            setLoad(false);
            clear();
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    const handleSubmit = (e) =>{
       
        e.preventDefault();
        const items = productos.map((el)=>{
            return{
                id: el.id,
                title: el.title,
                price: el.price,
                amount:  unitsPerProduct(el.id) 
            }
        })
        const buyDate = new Date();
        const precioTotal = getTotalPrice();
        const data = {buyer, items, buyDate, precioTotal};
        upOrder(data);
    }


    let formPurchase = <form className='form-container' onSubmit={handleSubmit}>
                            <input className='form-input' type='text' placeholder='Nombre' name='Nombre' value={nombre} onChange={handleInputChange}/>
                            <input className='form-input' type="tel" name="Telefono" id="" placeholder='Número de teléfono' value={telefono} onChange={handleInputChange}/>
                            <input className='form-input' type="email" name="Email" id="" placeholder='E-mail' value={email} onChange={handleInputChange}/>
                            <input className='form-input' type="submit" value="Enviar" />
                        </form>

        if( orderId){
            return(
                    <>
                    <NavBar/>
                    <div className='finished-container'>
                        <h3>¡Felicitaciones por su compra!</h3>
                        <p>A la brevedad nos estamos contactando para coordinar pago y envio</p>
                        <p><strong>Orden de compra: {orderId}</strong></p>
                        <MyButton textoBoton='Volver a comprar' pathDestino='../'/> 
                    </div>
                    </>
            )
        }
        else {

            return(
                load? <><NavBar/><div className='spinner'><h3>Cargando...</h3></div></>:
                    <>
                    <NavBar/>
                    <h1>CheckOut</h1>
                    {formPurchase}
                    </>
            )
        }

}
    
export default Checkout;
