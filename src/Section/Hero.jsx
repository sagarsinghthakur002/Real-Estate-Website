import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkModeContext';
import heroimg from '../assets/images/hero1.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
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
        <>
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
            <section
                id="hero"
                className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
                style={{ backgroundImage: `url(${heroimg})` }}
            >
                <h1 data-aos="zoom-in" className="lg:text-6xl text-[40px] text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[45px]">
                    Find your next home in Las Vegas
                </h1>
                <p data-aos="zoom-in" className="text-white lg:text-xl text-[15px] lg:pr-[500px] pr-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus nisi ipsum illum, fugit perferendis magnam aspernatur ab deleniti, magni, adipisci molestiae porro? Placeat, at. Fugit, cumque facere! Porro, repudiandae.
                </p>
            </section>
        </div>

        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10s border-black`} >
            <div data-aos="zoom-in" id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
                <div className='w-full'>
                    <h1 className='text-black font-semibold dark:text-white'> Location</h1>
                    <input type="text" placeholder="Enter Location" className=" bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]" />
                </div>

                <div className='w-full'>
                    <h1 className='text-black font-semibold dark:text-white'> Type</h1>
                    <select name='selectOption' id="selectOption" className='bg-white p-2 border-b-[1px] mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                        <option value="apartment">Rental</option>
                        <option value="apartment">Sales</option>
                        <option value="apartment">Commercial</option>
                    </select>
                </div>

                <div className='w-full'>
                    <h1 className='text-black font-semibold dark:text-white'> Propery Category</h1>
                    <select name='selectOption' id="selectOption" className='bg-white p-2 border-b-[1px] mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                        <option value="apartment">Apartment</option>
                        <option value="apartment">House</option>
                        <option value="apartment">Commercial</option>
                        <option value="apartment">Commercial</option>
                    </select>
                </div>

                <div className='w-full'>
                    <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white  dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transitaion-transform duration-300'>SUBMIT</button>

                </div>

            </div>

        </div>
        </>
    );
};

export default Hero;
