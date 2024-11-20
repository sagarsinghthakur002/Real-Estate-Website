import React, { useEffect } from 'react';
import { property } from '../components/export';
import { FaMapMarkerAlt, FaVideo, FaCamera, FaBath, FaBed, FaUserCircle, FaShareAlt, FaHardHat, FaPlus } from "react-icons/fa";
import { MdSpaceDashboard } from 'react-icons/md';
import { useDarkMode } from '../components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Properties = () => {
  
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-white text-black'}`}>
      <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
        
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 className='text-4xl font-bold underline'>PROPERTIES</h1>
          <h1 data-aos="zoom-in" className='text-black text-4xl font-semibold dark:text-white'>Explore the latest</h1>
        </div>

        {/* Properties grid starts here */} hover:bg-white hover:text-black

        <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {property.map((item, index) => (
            <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full shadow-lg'>
              <div 
                id='image-box' 
                className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between relative' 
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div id='top' className='flex justify-between items-center w-full'>
                  <button className='px-3 py-1 bg-red-600 text-white hover:bg-white hover:text-black rounded-full text-xs font-semibold'>Featured</button>
                  <div className='flex gap-2'>
                    <button className='px-3 py-1 bg-red-600 text-white hover:bg-white hover:text-black rounded-full text-xs font-semibold'>Sales</button>
                    <button className='px-3 py-1 bg-red-600 text-white hover:bg-white hover:text-black rounded-full text-xs font-semibold'>Active</button>
                  </div>
                </div>

                <div id='bottom' className='flex justify-between items-center w-full mt-auto'>
                  <div className='flex items-center gap-2'>
                    <FaMapMarkerAlt className='text-white' />
                    <span className='text-white text-sm'>{item.address}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='p-2 bg-transparent text-white rounded-full'>
                      <FaVideo className='text-lg' />
                    </button>
                    <button className='p-2 bg-transparent text-white rounded-full'>
                      <FaCamera className='text-lg' />
                    </button>
                  </div>
                </div>
              </div>

              <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
                <h1 className='text-xl font-bold dark:text-white'>{item.name}</h1>
                <h1 className='text-2xl text-red-600 font-bold'>{item.price}</h1>
                <p className='text-sm text-gray-700 dark:text-gray-300'>{item.about}</p>
                
                <div id='icons' className='flex justify-start items-center gap-4 mt-4'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaBath className='text-xl text-red-400' />
                    <h1 className='dark:text-white text-sm'>{item.bath}</h1>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                    <FaBed className='text-xl text-red-400' />
                    <h1 className='dark:text-white text-sm'>{item.bed}</h1>
                  </div>
                  <div className='flex justify-center items-center gap-2'>
                    <MdSpaceDashboard className='text-xl text-red-400' />
                    <h1 className='dark:text-white text-sm'>{item.area}</h1>
                  </div>
                </div>

                <div className='w-full h-[1px] bg-gray-200 mt-8'></div>

                <div id='owner-info' className='flex items-center gap-2 w-full mt-4'>
                  <FaUserCircle className='text-2xl text-red-400' />
                  <h1 className='dark:text-white font-medium'>{item.owner}</h1>
                </div>

                <div className='flex justify-center items-center gap-4 mt-4'>
                  <div className='p-2 border-2 border-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                    <FaShareAlt className='text-xl text-red-400' />
                  </div>
                  <div className='p-2 border-2 border-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                    <FaHardHat className='text-xl text-red-400' />
                  </div>
                  <div className='p-2 border-2 border-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                    <FaPlus className='text-xl text-red-400' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Properties;
