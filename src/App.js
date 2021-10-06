import Home from './pages/Home';
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from './pages/NotFound';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {

  return (
    
    <BrowserRouter >
      <div className="App">
    <NavBar />
        
        <Switch >
          <Route exact path='/' component={Home}/>

          <Route  path='/category/:categoryId' component={ItemListContainer}/>
          <Route  path='/item/:id' component={ItemDetailContainer}/>
          <Route  path='*' component={NotFound}/>

        </Switch>
        <footer >esto es un footer</footer>
      </div>
    </BrowserRouter>
  );
}
