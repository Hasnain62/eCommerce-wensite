import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style/Navbar.css';
const AdvancedNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">My App</a>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cart</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdvancedNavbar;