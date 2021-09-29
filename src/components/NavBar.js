import React from "react";
import CartWidget from "./CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import '../assets/styles/NavBar.css';

export const NavBar = () => {
  return (
    

    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to='/' className="navbar-brand">
           Green clock
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact to='/' activeClassName="active pepe" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to={`/category/:categoryId`} activeClassName="active" className="nav-item nav-link">
                Vehiculos
              </NavLink>
              <NavLink to={`/item/:id`} activeClassName="active" className="nav-item nav-link">
                Ropa 
              </NavLink>
              
            </div>
            
          </div>
          
          <CartWidget className="carrito"/>

        </nav>
      </div>
  );
};
