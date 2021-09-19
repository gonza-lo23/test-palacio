import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Counter from './pages/Counter';
import NotFound from './pages/NotFound';

import NavBar from './components/NavBar';
import Footer from "./components/Footer.js";
import SideBar from "./components/SideBar.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path= "/" component={Home} />
      <Route exact path= "/counter" component={Counter}/>
      <Route  path= "*" component={NotFound}/>
    </Switch>
    <Footer>este es el footer</Footer>
    </BrowserRouter>
  );
};

export default App;
