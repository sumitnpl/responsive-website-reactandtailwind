import React from 'react';
import laptop from '../Assets/laptop-1205256_640.jpg';

export default function Experts() {
  return (
    <div className='w-full py-10 px-4 bg-slate-400'>
      <div className='max-w-[1140px]  mx-auto grid md:grid-cols-2'>
       <img className='w-[500px] mx-auto my-5 col-span-1' src={laptop} alt='/' />
       <div className='flex flex-col justify-center pl-5 col-span-1'>
         <p className='text-[#2f8368] font-bold md:text-2xl md:mb-3'>Learn From Experts</p>
         <p>Learn From  lorem epsum this i sthe tag fro befor then where it can be possible for the communicating the 
          resources from the IT company for the futuristic nature in the world to survive in the nation like nepal </p>
          <button className='bg-black text-white w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
