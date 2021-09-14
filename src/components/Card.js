import "../assets/styles/Card.css";
import React from 'react';
import App from "../App.js";
import carrito from "../assets/photos/carrito.png";
import Main from "./Main";
import GrupoCartas from "./GrupoCartas";
  


function Card(props) {


  

    return (
        < div className="card">
            <div className="card-image">
            <img id="imagen-principal"
            src={props.src}
            alt="imagen"
            />
            </div>
            <div className="card-text">
                <span className="date">{props.date}</span>
             <h2>{props.postTitle}</h2>
             <p>{props.texto}
             </p>
             </div>
             
             <div className="card-stats">
                 <div className="stat">
                     <div className="value">4 <sup>m</sup></div>
                     <div className="type">read</div>
                 </div>
                 
                 <div className="card-stat">
            <h5>{props.valorInicial}</h5>
            
            <button onClick={props.botonResta}>1-</button>
            <button onClick={props.botonSuma}>1+</button>
                 </div>
                 
                 <div className="card-stat">
                     <img src={props.imagen} alt="" />
                     <button>añadir a carrito</button>
                 </div>
            </div> 
       </div>  
    )
}

export default Card;
