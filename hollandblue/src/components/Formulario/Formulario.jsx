import React from 'react';
import './Formulario.css';

function Formulario(props) {
    return (
        <div>
            <form className='form-container' action="">
                <input className='form-input' type={'text'} placeholder='Nombre y Apellido'></input>
                <input className='form-input' type="tel" name="Nombre " id="" placeholder='Número de teléfono' />
                <input className='form-input' type="email" name="Mail" id="" placeholder='E-mail'/>
                <input className='form-input' type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Formulario;