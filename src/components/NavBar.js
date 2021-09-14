import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from "./Header.js";
import '../assets/styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "../components/CartWidget.js";



const imprimir4 = () =>alert("registro no autorizado por el momento");
 



const NavBar = (props) => {
    
    
    return (

        <div className="titulo">
            <h2>{props.title}</h2>
            <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" className="form-control" />
  </div>
  <button id="lupita" type="button" className="btn btn-primary">
    <i className="fas fa-search">Search</i>
  </button>
</div>
<button id="button4" type="button" className="btn btn-outline-light">Login</button>

        <CartWidget className="carrito" infos={props.infos}/>
        </div>
    )
};

export default NavBar;
