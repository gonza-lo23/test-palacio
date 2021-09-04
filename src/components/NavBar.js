import React from 'react';
import Button from 'react-bootstrap/Button';
import '../assets/styles/NavBar.css';

const imprimir = () =>alert("1.000.023");
const imprimir2 = () =>alert("$200.25");
const imprimir3 = () =>alert("400 usd");

const NavBar = () => {
    return (
        <div className="titulo">
            <h2>Cotizacion bursatil</h2>
            
      <button id="button1" className="btn btn-primary btn-sm" onClick={imprimir}>ver cotizacion bitcoin/usd</button>

      <button id="button2" className="btn btn-secondary btn-sm"onClick={imprimir2}>ver cotizacion peso/usd</button>
      <button id="button3"  className="btn btn-danger btn-sm"onClick={imprimir3}>ver cotizacion usd/oro</button>
      <button id="button4"  className="btn btn-outline-light btn-sm"onClick={imprimir3}>Iniciar Sesion</button>

      
        </div>
    )
};

export default NavBar;
