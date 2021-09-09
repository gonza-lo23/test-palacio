import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import "../assets/styles/CartWidget.css";
import carrito from "../assets/photos/carrito.png";

function CartWidget() {
    const [count, setCount] = useState(0);

    return (
        
        <div className="carrito">
             <img src={carrito} alt="" />
       
        </div>
    )
}

export default CartWidget
