import React from 'react';
import Formulario from '../../components/Formulario/Formulario';
import NavBar from '../../components/NavBar/NavBar';

function Checkout(props) {
    return (
        <div>
             <NavBar/>
            <h1>CheckOut</h1>
            <Formulario/>
        </div>
    );
}

export default Checkout;
