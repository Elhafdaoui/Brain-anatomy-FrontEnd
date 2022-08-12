import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'
export const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="items">
          <div className="item">
            <p>Brain Anatomy </p>
          </div>
          <div className="item">
            <p>Welcome</p>
          </div>
        </div>
      </div>
    </>
  )
}
