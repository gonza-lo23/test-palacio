import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/styles/CartWidget.css";
import carrito from "../assets/photos/carrito.png";

function CartWidget(props) {
    
    const ThemeContext = React.createContext();

    return (
        <div className="carrito">
            
             <img src={carrito} alt=""/>
            <h2>{props.infos}</h2>
            <ThemeContext.Consumer>
            {(carro) => (<p>{carro}</p>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default CartWidget;
