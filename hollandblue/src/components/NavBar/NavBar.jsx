import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import molino from './imagenes/molino.png';




function NavBar(props) {
    return (
        <>
        <span  className="nav-bar" id="btnMenu"> <i className="fas fa-bars"></i>Menú</span>
       
        <nav className="main-nav">
            <ul className="menu" id="menu">
                  <li className="menu__item"><a href="#" className="menu__link logo" ><img id='icono-logo' src={molino} alt="" /></a></li>
                  <li className="menu__item"><a href="#" className="menu__link">Holland Blue</a></li>
                  <li className="menu__item container-submenu">
                    <a href="" className="menu__link submenu-btn" id="productos">Productos <i className="fas fa-chevron-down"></i> </a>
                    <ul className="submenu" id="sub-productos">
                        <li className="menu__item"><a href="#" className="menu__link">Adornos</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Azulejos</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Platos</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">General</a></li>
                    </ul>
                  </li>
                  <li className="menu__item"><a href="#" className="menu__link">Contacto</a></li>
                  <span className='icono-carrito'><CartWidget/></span>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;