import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../components/ItemListContainer.js';
import '../assets/styles/Home.css';


function Home() {

  
    
    return (
        <div className="main">
            <div className="headliner">
            <h1>Bienvenidx a Green clock</h1>
            <p>Donde podes encontrar las mejores ofertas </p>
            </div>
            <div className="itemlistContainer">
            <ItemListContainer />
            </div>
        </div>
    )
}

export default Home;
