import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header({ successe , errorse,successed }) {
    const [toggle, setToggle] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setToggle(false); // Close the responsive menu after scrolling
        }
    };

    return (
        <div className='bg-gradient-to-l from-indigo-950 to-indigo-900 p-4'>
            <div className='max-w-[1140px] py-[12px] items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold font-sans cursor-pointer text-orange-700'> WS cube tech</div>
                {
                    toggle ? 
                    <AiOutlineClose 
                        onClick={() => setToggle(!toggle)}  
                        className='text-white text-3xl font-bold md:hidden block'/>
                         :
                    <AiOutlineMenu  
                        onClick={() => setToggle(!toggle)} 
                        className='text-white text-3xl font-bold md:hidden block'/>
                }
                <ul className='hidden md:flex text-white gap-10'>
                    <li className='cursor-pointer' onClick={() => {errorse('We are in Home Page'); scrollToSection('home')}}>Home</li>
                    <li className='cursor-pointer' onClick={() => {successed('Experts clicked'); scrollToSection('experts')}}>Experts</li>
                    <li className='cursor-pointer' onClick={() => {successed('News Letter clicked'); scrollToSection('newsletter')}}>News Letter</li>
                    <li className='cursor-pointer' onClick={() => {successed('Courses clicked'); scrollToSection('courses')}}>Courses</li>
                </ul>
                {/* Responsive menu */}
                <ul className={`duration-700 md:hidden text-white fixed w-full h-screen top-[92px] bg-slate-900 ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='p-5' onClick={() => {scrollToSection('experts'); setToggle(false)}}>Experts</li><hr />
                    <li className='p-5' onClick={() => {scrollToSection('newsletter'); setToggle(false)}}>News Letter</li><hr />
                    <li className='p-5' onClick={() => {scrollToSection('courses'); setToggle(false)}}>Courses</li><hr />
                </ul>
            </div>
        </div>
    );
}
