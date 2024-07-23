import React from 'react'
import './style.css'; // Assurez-vous de créer ce fichier CSS
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand .navbar-brand img" href="#page-top"><img src="assets/assets/img/logo-bionic-soul.png" alt="..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" >About Us</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-link" >Products</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link" >usage</Link></li>
            <li className="nav-item"><Link to="service" className="nav-link" >Services</Link></li>
            <li className="nav-item"><Link to="/achievement" className="nav-link" >achivements&award</Link></li>
            {/* <li className="nav-item"><Link to="/team" className="nav-link" >Team</Link></li> */}
            <li className="nav-item"><Link to="contact" className="nav-link" >Contact</Link></li>
            {/* <li className="nav-item"><Link to="/contact" className="nav-link" href="#about">CONTACT</Link></li> */}
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar