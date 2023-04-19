import React from 'react'
import logo from './Images/Kalinga Cashew Logo.png'
import logo2 from './Images/Logo2.png'
import jarbg from './Images/Jar-no-bg.png'
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={jarbg} alt="Bootstrap" width="50" height="55"></img>
          <span className="navbar-brand mb-0 h1">Kalinga Cashew</span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to ="/"aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item text-primary">
                <Link className="nav-link " to="/about">About Us</Link>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-auto order-5">
              <Link className="nav-link " to="/cart">Cart</Link>
              </li>

              <li className="nav-item ms-auto order-5">
                <a className="nav-link" href="#">Login/Sign Up</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}
