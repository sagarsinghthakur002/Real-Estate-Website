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

    const { darkMode } = useDarkMode(); 

    return (
        <div className={darkMode ? 'dark bg-black' : 'light bg-white'}>
            <section
                id="hero"
                className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
                style={{ backgroundImage: `url(${heroimg})` }}
            >
            
            </section>
        </div>
    );
};

export default Hero;
