import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function Footer() {
  return (
    <div className='bg-gradient-to-l from-indigo-950 to-indigo-900 sm:py-[64px]'>
      <div className='max-w-[1240px] mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>

          {/* First Column */}
          <div className='col-span-2'>
            <h1 className='text-3xl text-orange-700 font-bold mb-10'>WsCube Tech.</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem at ante aliquet porttitor.</p>
            {/* Social Icons */}
            <div className='flex justify-center mt-4 py-5'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <BiLogoFacebookCircle className='text-white md:w-20 mr-3 md:mr-6 w-6 h-6 hover:text-[blue] hover:scale-125' /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <GrInstagram className='text-white md:w-20 mr-3 md:mr-6 w-6 h-6 hover:text-yellow-700 hover:scale-125' /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-white md:w-20 mr-3 md:mr-6 w-6 h-6 hover:text-[blue] hover:scale-125' /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GrGithub className='text-white md:w-20 mr-3 md:mr-6 w-6 h-6 hover:text-black hover:scale-125' /></a>
            </div>
          </div>

          {/* Second Column */}
          <div className='col-span-4 md:ml-[45px] grid grid-cols-2 md:grid-cols-4 gap-12'>
            {/* Solutions */}
            <div>
              <h2 className='text-xl text-gray-500 font-semibold'>Solutions</h2>
              <p className='text-white'>Analytics</p>
              <p className='text-white'>Marketing</p>
              <p className='text-white'>Commerce</p>
              <p className='text-white'>Insights</p>
            </div>
            {/* Support */}
            <div>
              <h2 className='text-xl text-gray-500 font-semibold'>Support</h2>
              <p className='text-white'>Pricing</p>
              <p className='text-white'>Documentation</p>
              <p className='text-white'>Guides</p>
              <p className='text-white'>API Status</p>
            </div>
            {/* Company */}
            <div>
              <h2 className='text-xl text-gray-500 font-semibold'>Company</h2>
              <p className='text-white'>About</p>
              <p className='text-white'>Blog</p>
              <p className='text-white'>Jobs</p>
              <p className='text-white'>Press</p>
              <p className='text-white'>Careers</p>
            </div>
            {/* Legal */}
            <div>
              <h2 className='text-xl text-gray-500 font-semibold'>Legal</h2>
              <p className='text-white'>Claim</p>
              <p className='text-white'>Policy</p>
              <p className='text-white'>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
