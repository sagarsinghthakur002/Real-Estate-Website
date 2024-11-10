import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg';
import { useDarkMode } from '../components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Popural = () => {

  seEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      
    </div>
  )
}

export default Popural
