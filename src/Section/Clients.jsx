import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext';
import {CLient} from '../components/export'
import { FaStar } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Clients = () => {

  useEffect(() => {
    Aos.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
    });
}, []);

const { darkMode, toggleDarkMode } = useDarkMode(); 


  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='testimonials' className='lg:w-[95%] w-[full] h-fit m-auto bg-cover bg-center rounded-xl justify-center items-start lg:px-20 px-6 py-20 gap-y-20'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>Our Clients</h1>
          <h1 className='text-black dark:text-white text-[40px] font-semibold leading-10'> what our Clients <br></br> Saying about us</h1>
        </div>

        <div id='clients-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8  w-full'>


          client.map((item, index) => (
            <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white dark:bg-gray-900 hover:bg-red-100
             cursor-pointer p-12 flex flex-col justify-center items-center gap rounded-xl w-full'></div>

          ))


        </div>

      </section>

    </div>
  )
}

export default Clients
