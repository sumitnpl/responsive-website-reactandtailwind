import React, { useState, useEffect } from 'react';
import Experts from './Component/Experts';
import NewsLetter from './Component/NewsLetter';
import Cards from './Component/Cards';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Banner from './Component/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  const successe = (message) => toast.success(`Successfully ${message}`);
  const successed = (message) => toast.success(`${message}`);
  const errorsd = (message) => toast.warn(`${message}`);
  const [toggle, setToggle] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior:'smooth'});
      setToggle(false); // Close the responsive menu after scrolling
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled down at least 100 pixels, show the "up" button
      if (window.scrollY > 450) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect only runs once on mount

  return (
    <div className='flex flex-col bg-slate-400'>
      <ToastContainer
        position="bottom-right"
        className="fixed z-50 bottom-4 right-4 w-72"
        toastClassName={({ type }) =>
          `bg-white shadow-lg rounded-md p-4 ${
            type === 'success' ? 'bg-black text-black' : 'bg-white text-red-900'
          }`
        }
        bodyClassName="text-sm"
        closeButton={false}
        autoClose={5000}
      />
      <div id='home'><Header  errorse={errorsd} successed={successed} scrollToSection={scrollToSection} /></div>
      <Banner />
      <div id='experts'><Experts /></div>
      <div id='newsletter'><NewsLetter /></div>
      <div id='courses'><Cards errorse={errorsd} successed={successed} /></div>
      <Footer />
      {showUpButton && (
        <button
  onClick={() => { scrollToSection('home') }}
  className='bg-slate-500 text-white p-5 mr-[35px] shadow-lg right-0 mt-[550px] rounded-full fixed'>
  <FaArrowUp className='text-1xl'/>
</button>
      )}
    </div>
  );
}

export default App;
