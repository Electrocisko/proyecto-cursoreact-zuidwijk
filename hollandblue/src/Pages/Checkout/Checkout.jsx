import { addDoc, collection, Firestore, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import CartContext from '../../Context/cart-context';



function Checkout(props) {

    const {productos, getTotalPrice, } = useContext(CartContext);
    const [orderId, setOrderId] = useState();

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
        const order = data;
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')

        addDoc(ordersCollection,order)
        .then(({ id }) =>setOrderId(id));
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        const items = productos.map((el)=>{
            return{
                id: el.id,
                title: el.title,
                price: el.price,
            }
        })
        const buyDate = new Date();
        const precioTotal = getTotalPrice();
        const data = {buyer, items, buyDate, precioTotal};
        upOrder(data);
    }

    



    return (
        <div>
             <NavBar/>
            <h1>CheckOut</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <input className='form-input' type='text' placeholder='Nombre' name='Nombre' value={nombre} onChange={handleInputChange}/>
                <input className='form-input' type="tel" name="Telefono" id="" placeholder='Número de teléfono' value={telefono} onChange={handleInputChange}/>
                <input className='form-input' type="email" name="Email" id="" placeholder='E-mail' value={email} onChange={handleInputChange}/>
                <input className='form-input' type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Checkout;
