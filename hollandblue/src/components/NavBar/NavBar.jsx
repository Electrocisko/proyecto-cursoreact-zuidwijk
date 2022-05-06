import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import molino from './imagenes/molino.png';
import {Link} from 'react-router-dom';


function NavBar(props) {



    
    return (
        <>
        <span  className="nav-bar" id="btnMenu"> <i className="fas fa-bars"></i>Menú</span>
       
        <nav className="main-nav">
            <ul className="menu" id="menu">
                  <li className="menu__item"><Link className='link-navbar' to={'/'}><img id='icono-logo' src={molino} alt="" /></Link></li>
                  <li className="menu__item"><Link className='menu__link' to={'/'}>Holland Blue</Link></li>
                  <li className="menu__item container-submenu">
                    <Link to='/' className="menu__link submenu-btn" id="productos">Productos <i className="fas fa-chevron-down"></i> </Link>
                    <ul className="submenu" id="sub-productos">
                        <li className="menu__item"><Link className='menu__link' to={'/category/adornos'}>Adornos</Link></li>
                        <li className="menu__item"><Link className='menu__link' to={'/category/azulejos'}>Azulejos</Link></li>
                        <li className="menu__item"><Link className='menu__link' to={'/category/vajillas'}>Vajillas</Link></li>
                    </ul>
                  </li>
                  <li className="menu__item"><a href="#" className="menu__link">Contacto</a></li>
                  <span className='icono-carrito'><CartWidget cant={0}/></span>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;