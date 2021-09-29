import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/CartWidget.css";
import carrito from "../assets/photos/carrito.png";

function CartWidget(props) {

    return (
        
        <div className="carrito">
             <img src={carrito} alt=""/>
            <h2>{props.infos}</h2>
        </div>
    )
}

export default CartWidget;
