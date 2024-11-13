import React, { useEffect } from 'react'
import {service} from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-white text-black'} pb-20`}>
      <section id='services' className={`${darkMode ? 'dark bg-gray-800' : ' light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-strat
      lg:px-20 px-6 py-20 gap-10`}>
        <div className=''></div>
      </section>
    </div>
  )
}

export default Service
