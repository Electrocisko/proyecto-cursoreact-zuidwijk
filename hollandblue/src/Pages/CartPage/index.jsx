import React from 'react';
import Cart from '../../components/Cart/Cart';
import Formulario from '../../components/Formulario/Formulario';
import NavBar from '../../components/NavBar/NavBar';

function CartPage(props) {
    return (
        <div>
            <NavBar/>
            <Cart/>
          
        </div>
    );
}

export default CartPage;