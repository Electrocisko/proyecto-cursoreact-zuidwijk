import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const sumar = () =>
    count < stock ? setCount(count + 1) : console.log("No hay stock");
  const restar = () =>
    count > 1 ? setCount(count - 1) : console.log("No se puede restar");

  if (stock > 0) {
    return (
      <div className="contenedor">
        <div className="card">
          <div className="stock-text">Stock: {stock}</div>
          <div className="contenedor__botones">
            <button className="boton card__boton" onClick={() => restar()}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <input className="card__stock" readOnly value={count} />
            <button className="boton card__boton" onClick={() => sumar()}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <button className="boton-agregar" onClick={() => onAdd(count)}>
            Agregar carrito
          </button>
        </div>
      </div>
    );
  } else {
    return <p>Sin Stock momentaneamente</p>;
  }
}

export default ItemCount;
