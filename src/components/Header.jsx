import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { useDarkMode } from './DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Properties', path: 'properties' },
    { label: 'Services', path: 'services' },
    { label: 'Testimonials', path: 'testimonials' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <nav
      className={`${
        darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div id="logo">
        <img
          src={logo}
          alt="company logo"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {label}
          </Link>
        ))}
      </ul>

{/* Mobile Menu */}
<div className="lg:hidden">
  {/* Menu Toggle Button */}
  <div onClick={toggleMenu} className="cursor-pointer">
    {isMenuOpen ? (
      <FaTimes className="text-black dark:text-white text-2xl" />
    ) : (
      <FaBars className="text-black dark:text-white text-2xl" />
    )}
  </div>

  {/* Dropdown Menu */}
  {isMenuOpen && (
    <div className="w-full bg-slate-800 p-4 absolute top-[80px] left-0">
      <ul className="flex flex-col justify-center items-center gap-2 w-full">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </ul>
    </div>
  )}
</div>

    </nav>
  );
};

export default Header;
