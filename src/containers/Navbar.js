import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/Bitcoin-icon.png'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-inverse bg-inverse'>
      <NavLink exact to='/'> <img src={Logo} alt='Home' /> Crypto Companion </NavLink>
    </nav>
  )
}

export default Navbar;