import React, {
  Suspense,
  useEffect,
  useRef,
  useState
} from'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import './navbar.css';
import Logo from './../../assets/logo.jpg';

function Navbar() {
  const log = (log) => {console.log(log)};

  const windowLocation = useLocation();

  const [navbarState, SetNavbarState] = useState(false);
  const [navbarClassNames, setNavbarClassNames] = useState({
    navbar: 'navBar',
    navLinks: 'nav-links',
    link: 'navbar-link'
  });

  const showNavbar = () => {
    setNavbarClassNames({
      navbar: 'navBar show',
      navLinks: 'nav-links',
      link: 'navbar-link show',
    });

    // Only shows the navbar links when transition ends
    setTimeout(() => {
      setNavbarClassNames(prevState => {
        return {
          ...prevState,
          navLinks: 'nav-links show'
        }
      });
    }, 200);
  };

  const hideNavbar = () => {
    setNavbarClassNames({
      navbar: 'navBar',
      navLinks: 'nav-links',
      link: 'navbar-link'
    });
  };

  // When navbarState changes shows or hides the navbar
  useEffect(() => {
    navbarState ? showNavbar() : hideNavbar();
  }, [navbarState]);

  const navbarExpandClickHandler = () => {
    SetNavbarState(!navbarState);
  };
  
  // Only runs the code 200ms after the user is done resizing
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth >= 850) hideNavbar();
    }, 200);
  });

  return (
    <div id="container">
    <div className="top-bar">
      <Link to="/"><img src={Logo} alt="logo" className="top-logo"/></Link>
      <ul className='top-links'>
        <li className="top-number">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon number" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
        </svg>
          <a id="telephone" href='tel:+299641603'>Telefon: (+299)641603</a></li>
        <li className="top-email">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon email" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <polyline points="3 7 12 13 21 7"></polyline>
        </svg>
          <a id="email" href='mailto:laila@llregnskab.com'>E-mail: laila@llregnskab.com</a>
        </li>
        <li className="top-address">
        <svg xmlns="http://www.w3.org/2000/svg" className="top-icon location" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="11" r="3"></circle>
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
        </svg>
          <a id="address" href='http://maps.google.com/?q=1004%20Sanatorievej' target='_blank' rel='noreferrer'>Adresse: Sanatorievej 1004, Qaqortoq</a>
        </li>
      </ul>
      <div className="link-burger" onClick={navbarExpandClickHandler}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
    </div>
    <nav className={navbarClassNames.navbar}>
      <ul className={navbarClassNames.navLinks}>
        <li><Link className={navbarClassNames.link} to='/'>Forside</Link></li>
        <li><Link className={navbarClassNames.link} to='/about'>Om</Link></li>
        <li><Link className={navbarClassNames.link} to='/contact'>Kontakt</Link></li>
      </ul>
      <li className='languages'>
        <Link className='lang' to={windowLocation.pathname} id='da'>
          <img
            src="https://flagcdn.com/20x15/dk.png"
            srcSet="https://flagcdn.com/40x30/dk.png 2x,https://flagcdn.com/60x45/dk.png 3x"
            width="35"
            height="15"
            alt="DK">
          </img>
        </Link>
        <Link className='lang' to={'/en' + windowLocation.pathname} id='en'>
          <img
            src="https://flagcdn.com/20x15/us.png"
            srcSet="https://flagcdn.com/40x30/us.png 2x,https://flagcdn.com/60x45/us.png 3x"
            width="30"
            height="15"
            alt="United States">
          </img>
        </Link>
        <Link className='lang' to={'/grl' + windowLocation.pathname} id='grl'>
          <img
            src="https://flagcdn.com/20x15/gl.png"
            srcSet="https://flagcdn.com/40x30/gl.png 2x,https://flagcdn.com/60x45/gl.png 3x"
            width="30"
            height="15"
            alt="Greenland">
          </img>
        </Link>
        </li>
    </nav>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet></Outlet>
    </Suspense>
  </div>
  );
}

export default Navbar;