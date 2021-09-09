import "../assets/styles/Card.css";
import React from 'react';
import App from "../App.js";
import carrito from "../assets/photos/carrito.png";

function Card(props) {
    return (
        <div className="card">
            <h2 className="title">{props.title}</h2>
            <img id="imagen-principal"
            src={props.src}
            alt="imagen"
            />
             <h5>la realidad hacerca de la 
                 jurisdiccion sobre protocolo
                 del onu y todos sus allegados
                 permite redirigir a travez
             </h5>
             <div id="product-info">
             <h5 id="precio">$23,99</h5>
            <img id="imagen-carrito"
            src={carrito}
            />
            <span id="carro-info">Añadir al carrito</span>
            </div>
         </div>
    )
}

export default Card;
