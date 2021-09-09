import React from 'react'
import Card from "./Card.js";
import ItemListContainer from './ItemListContainer.js';
import "../assets/styles/Main.css";


function Main(props) {

  

    return (
          <div className="main" >
            <ItemListContainer id="itemListContainer" name="jorge"/>
            
          <Card 
           id="carta1"
           title ="parte 1"
           src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
           text="sdadasdasdsad
           asdasdsadsad"
         />
         
         <Card 
          id="carta2"
          title ="parte 2"
          src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         
         <Card 
         id="carta3"
         title ="parte 3"
         src= "https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         <Card 
         id="carta4"
         title ="parte 4"
         src= "https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         
        <div className="segunda-fila">
            
          <Card 
           id="carta5"
           title ="parte 1"
           src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
           text="sdadasdasdsad
           asdasdsadsad"
         />
         
         <Card 
          id="carta6"
          title ="parte 2"
          src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         
         <Card 
         id="carta7"
         title ="parte 3"
         src= "https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         <Card 
         id="carta4"
         title ="parte 4"
         src= "https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg"
          description="asdasdasdadsdas
          asdasdsadsad
          adsadasd"
         />
         
        </div>
        
         
            
        </div>
    )
}

export default Main;

