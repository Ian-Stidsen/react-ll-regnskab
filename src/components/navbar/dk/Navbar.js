import React from'react';

import '../navbar.css';
import Logo from '../../../assets/logo.jpg';

function Navbar() {
  let navbar;
  let navLinks;
  let links;
  window.addEventListener('load', () => {
    navbar = document.getElementsByClassName('navBar')[0];
    navLinks = document.getElementsByClassName('nav-links')[0];
    links = document.getElementsByClassName('navbar-link');
  });
  // Navbar toggle state
  let toggled = false;

  // Shows and hides navbar when screen width is less than 850px
  function NavFunction() {
    this.show = function() {
      toggled = true;
      navbar.classList.add('show');
      for (let i = 0; i < 3; i++) {
        links[i].classList.add('show');
      }
      setTimeout(function () {
        if (toggled) navLinks.classList.add('show');
      }, 300);
    };

    this.hide = function() {
      toggled = false;
      navbar.classList.remove('show');
      navLinks.classList.remove('show');
      for (let i = 0; i < 3; i++) {
        links[i].classList.remove('show');
      }
    };
  };

  const nav = new NavFunction();

  function navbarClickHandler() {
    if (!toggled) nav.show();
    else nav.hide();
  };

  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width >= 850) nav.hide();
  });
  
  return (
    <div id="container">
    <div className="top-bar">
      <a href="index.html"><img src={Logo} alt="logo" className="top-logo"/></a>
      <ul className='top-links'>
        <li className="top-number">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon number" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
        </svg>
          <a id="telephone" href='tel:+299641603'>Telefon: (+299)641603</a></li>
        <li className="top-email">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon email" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <polyline points="3 7 12 13 21 7"></polyline>
        </svg>
          <a id="email" href='mailto:laila@llregnskab.com'>E-mail: laila@llregnskab.com</a>
        </li>
        <li clasNames="top-address">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon location" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="11" r="3"></circle>
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
        </svg>
          <a id="address" href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel='noreferrer'>Adresse: Sanatorievej 1004, Qaqortoq</a>
        </li>
      </ul>
      <div className="link-burger" id="navToggle" onClick={navbarClickHandler}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
    </div>
    <nav className="navBar">
      <ul className="nav-links">
        <li><a id="home" className="navbar-link" href="/">Forside</a></li>
        <li><a id="about" className="navbar-link" href="/about">Om</a></li>
        <li><a id="contact" className="navbar-link" href="/contact">Kontakt</a></li>
      </ul>
      <li className='languages'>
        <a className='lang active' href='/dk' id='da'>
          <img
            src="https://flagcdn.com/20x15/dk.png"
            srcset="https://flagcdn.com/40x30/dk.png 2x,
              https://flagcdn.com/60x45/dk.png 3x"
            width="35"
            height="15"
            alt="DK"/>
        </a>
        <a className='lang' href='/en' id='en'>
          <img
            src="https://flagcdn.com/20x15/us.png"
            srcset="https://flagcdn.com/40x30/us.png 2x,
              https://flagcdn.com/60x45/us.png 3x"
            width="30"
            height="15"
            alt="United States"/>
        </a>
        <a className='lang' href='/grl' id='grl'>
          <img
            src="https://flagcdn.com/20x15/gl.png"
            srcset="https://flagcdn.com/40x30/gl.png 2x,
              https://flagcdn.com/60x45/gl.png 3x"
            width="30"
            height="15"
            alt="Greenland"/>
        </a>
        </li>
    </nav>
  </div>
  );
}

export default Navbar;