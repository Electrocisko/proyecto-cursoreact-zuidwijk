import React, { useContext } from "react";
import "./NavBarResponsive.css";
import CartWidget from "../CartWidget/CartWidget";
import molino from "./imagenes/molino.png";
import { Link } from "react-router-dom";
import CartContext from "../../Context/cart-context";

function NavBar(props) {
  const cart = useContext(CartContext);
  const itemsCart = cart.getCartQuantity();

  return (
    <>
      <span className="nav-bar" id="btnMenu">
        {" "}
        <i className="fas fa-bars"></i>Menú
      </span>

      <nav className="main-nav">
        <ul className="menu" id="menu">
          <li className="menu__item">
            <Link className="link-navbar" to={"/"}>
              <img id="icono-logo" src={molino} alt="" />
            </Link>
          </li>
          <li className="menu__item">
            <Link id="navbar-brand" className="menu__link" to={"/about"}>
              Holland Blue
            </Link>
          </li>
          <li className="menu__item container-submenu">
            <Link to="/" className="menu__link submenu-btn" id="productos">
              Productos <i className="fas fa-chevron-down"></i>{" "}
            </Link>
            <ul className="submenu" id="sub-productos">
              <li className="menu__item">
                <Link className="menu__link" to={"/category/Adornos"}>
                  Adornos
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to={"/category/Azulejos"}>
                  Azulejos
                </Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to={"/category/Vajillas"}>
                  Vajillas
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Contacto
            </a>
          </li>
          <span className="icono-carrito">
            {" "}
            <Link className="carrito-navbar" to={"/cart"}>
              <CartWidget cant={0} />
            </Link>
          </span>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
