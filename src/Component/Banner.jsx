import React from 'react'
import { ReactTyped } from 'react-typed'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Banner() {
  
  const successe = (message) => toast.success(`${message}`);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <div className='bg-gradient-to-l from-indigo-950 to-indigo-900 w-full  py-[50px]'>
     <div className='max-w-[1140px] my-[90px] font-bold mx-auto text-center'>
        <div className=' text-xl text-[#65c6a7] md:text-3xl md:p-[24px] mb-4px'>
        Learn With us</div>
        <div className='text-white text-3xl md:text-[80px] md:p-[24px] mt-4'>Grow with us </div>
        <div className='text-[20px] md:text-[50px] text-white mt-4 md:p-[24px]'>Learn
        <ReactTyped className='pl-3 text-slate-500'
        strings={['Web Developer','Digital Marketting']}
        typeSpeed = {100}
        backSpeed={100}
        loop
        />
        </div>
        <button 
        onClick={() => {successe('Connect with us from this amazing courses'); scrollToSection('courses')}}
        className='sm:w-[25%] bg-orange-600 text-white p-2 mt-5 rounded-md mx-auto'>
        Get Started
        </button>
        
     </div>
     
    </div>
  )
}
