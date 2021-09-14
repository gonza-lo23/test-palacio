import React from 'react'
import Card from "./Card.js";
import ItemListContainer from './ItemListContainer.js';
import "../assets/styles/Main.css";
import GrupoCartas from './GrupoCartas.js';


function Main(props) {

  
   const [isLogged, setIsLogged] = React.useState(false);
   
  
   const handleClick = () => {
     if(isLogged === true){
       setIsLogged(false);
     }else{
       setIsLogged(true);
     }
   };
   
    return (
          <div className="main" >
            <div className="main-text">
            <ItemListContainer></ItemListContainer>
            <h5>Donde los pequeños inversores logran la libertad financiera
            
            </h5>
            <h5>{isLogged.toString()}</h5>
            <button onClick={handleClick}>logeate</button>
            </div>
            <GrupoCartas/>  
        </div>
    )
}

export default Main;

