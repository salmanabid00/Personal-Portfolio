import React, { useState, useRef } from 'react';
import logo from './assets/logo.svg';
import underline from './assets/nav_underline.svg';
import menu_open from './assets/menu_open.svg';
import menu_close from './assets/menu_close.svg';
import "./Navbar.css"

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // Close menu after clicking a link in mobile view
  };

  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" />
      <img src={menu_open} alt="Open Menu" onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="Close Menu" onClick={closeMenu} className='nav-mob-close' />
        <li onClick={() => handleMenuClick('home')}>
          <a href="#home">
            Home
            {menu === "home" && <img src={underline} alt="Underline" />}
          </a>
        </li>
        <li onClick={() => handleMenuClick('about')}>
          <a href="#about">
            About Me
            {menu === "about" && <img src={underline} alt="Underline" />}
          </a>
        </li>
        <li onClick={() => handleMenuClick('Services')}>
          <a href="#services">
            Services
            {menu === "portfolio" && <img src={underline} alt="Underline" />}
          </a>
        </li>
        <li onClick={() => handleMenuClick('contact')}>
          <a href="#contact">
            Contact
            {menu === "contact" && <img src={underline} alt="Underline" />}
          </a>
        </li>
      </ul>
      <a href="#contact" className="nav-connect">Connect with me</a>
    </div>
  );
}

export default Navbar;
