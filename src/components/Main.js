import React from 'react';
import ItemListContainer from './ItemListContainer.js';
import "../assets/styles/Main.css";


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
            <h5>Donde los pequeños inversores logran la libertad financiera
            
            </h5>
            <h5>{isLogged.toString()}</h5>
            <button onClick={handleClick}>logeate</button>
            </div>
            <div className="cartas">
            <ItemListContainer /> 
            </div> 
        </div>
    )
}

export default Main;

