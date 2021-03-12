import React from 'react';
import {Navbar} from 'reactstrap';
import './navbar.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div className="mt-2">
      <Navbar className= "nav-bar row d-flex align-items-center" light expand="md">
        <div className="col-6 logo-cont">
          <Link to="/">
            <img className="logo" src={logo} alt="logo_quechou"/>
          </Link>
        </div> 
      </Navbar>
    </div>
  );
}

export default NavbarComponent;