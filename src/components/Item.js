import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import Card from './Card.js';

function Item(props) {
    const [valorIni, setValorIni] = useState(1);
    const [valorIni2, setValorIni2] = useState(1);
    const [valorIni3, setValorIni3] = useState(1);

    

    const sumarBoton = () => {
      setValorIni((p)=>p +1)
     
     };
      const restarBoton = () => {
       setValorIni((p)=>p -1)
      
      };
      
      const sumarBoton2 = () => {
        setValorIni2((p) => p + 1);
      };
      
      const restarBoton2 = () => {
       setValorIni2((p)=>p -1)
      
      };
      
       
      const sumarBoton3 = () => {
        setValorIni3((p) => p + 1);
      
      };
      
      const restarBoton3 = () => {
       setValorIni3((p)=>p -1)
      
      };
      
      const comprarProducto = ({product}) => {
        console.log(`has comprado ${product}`)
    }

    return (
        <div>
            ~
        </div>
    )
}

export default Item
