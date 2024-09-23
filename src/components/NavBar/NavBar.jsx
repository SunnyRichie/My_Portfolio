import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/updated_logo.svg';
// import underline from '../../assets/nav_underline.svg';
import underline from '../../assets/theme_pattern.PNG';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-bar'>
      <span className='logo-name'> Richie</span>
      <img 
        className='nav-mob-open' 
        src={menu_open} 
        onClick={toggleMenu} 
        alt="Open Menu" 
      />
      
      <ul className={`nav-menu ${isMenuOpen ? 'open' : 'closed'}`}>
        <img 
          className='nav-mob-close' 
          onClick={toggleMenu} 
          src={menu_close} 
          alt="Close Menu" 
        />
        <li onClick={() => setActiveMenu('home')}>
          <AnchorLink className='anchor-link' href='#home'>
            <p>Home</p>
          </AnchorLink>
          {activeMenu === 'home' && <img src={underline} className='underline'  alt='Underline' />}
        </li>
        <li onClick={() => setActiveMenu('about')}>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About Me</p>
          </AnchorLink>
          {activeMenu === 'about' && <img src={underline} className='underline' alt='Underline' />}
        </li>
        <li onClick={() => setActiveMenu('services')}>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p>Services</p>
          </AnchorLink> 
          {activeMenu === 'services' && <img src={underline} className='underline' alt='Underline' />}
        </li>
        <li onClick={() => setActiveMenu('work')}>
          <AnchorLink className='anchor-link' offset={50} href='#mywork'>
            <p>Portfolio</p>
          </AnchorLink>
          {activeMenu === 'work' && <img src={underline} className='underline' alt='Underline' />}
        </li>
        <li onClick={() => setActiveMenu('contact')}>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
          {activeMenu === 'contact' && <img src={underline} className='underline' alt='Underline' />} 
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
