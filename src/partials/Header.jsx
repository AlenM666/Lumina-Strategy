import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from '../utils/Dropdown';

function Header() {

  const [desktopNavOpen, setDesktopNavOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);
  const desktopNav = useRef(null);

  //close the desktop menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!desktopNav.current || !trigger.current) return;
      if (!desktopNavOpen || desktopNav.current.contains(target) || trigger.current.contains(target)) return;
      setDesktopNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the desktop menu on click outside
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!desktopNavOpen || keyCode !== 27) return;
      setDesktopNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}

            <img src={"/image2vector.svg"} className="App-logo mx-auto pt-10 " alt="logo" height={"100px"} width={"100px"} />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${desktopNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={desktopNavOpen} onClick={() => setDesktopNavOpen(!desktopNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-800 hover:text-gray-200 transition duration-150 ease-in-out absolute top-0 right-0 mr-14 mt-9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/* Desktop sign in links */}
            <nav id="desktop-nav" ref={desktopNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={desktopNavOpen ? { maxHeight: desktopNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
              <ul className="bg-gray-200 px-4 py-2 rounded-lg items-center justify-center">
                <li>
                  <Link to="/#services" className="services font-medium inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => scrollSection(contactUs)}>Contact Us</Link>
                </li>
                <li>
                  <Link to="/#contact-us" className="contact-us font-medium  inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => scrollSection(contactUs)}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-800 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation !!! */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 }}>
              <ul className="bg-gray-100 px-4 py-2">
                <li>
                  <Link to="/#services" className="services font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => scrollSection(contactUs)}>Services</Link>
                </li>
                <li>
                  <Link to="/#contact-us" className="contact-us font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => scrollSection(contactUs)}>Contact Us</Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
