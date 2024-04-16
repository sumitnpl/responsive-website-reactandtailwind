import React from 'react';
import single from '../Assets/single.png';
import double from '../Assets/double.png';
import triple from '../Assets/triple.png';
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Cards({errorse,successed}) {
  return (
    <div className='w-full py-[5rem]'>
     <div className='max-w-[1140px] mx-auto grid md:grid-cols-3 gap-8'>

{/* First Card */}
     <div className='md:w-full bg-slate-400 h-[480px] sm:w-[90%] flex flex-col p-4 rounded-lg hover:scale-105  hover:bg-gray-300 group duration-300 shadow-xl'>
    <img className='w-20 mx-auto md:mt-[-3rem] hidden sm:mt-[-1rem] sm:block  bg-slate-400 transition-opacity  duration-500 group-hover:opacity-0 group-hover:duration-300' src={single} />
    <h2 className='text-2xl mt-5 font-bold text-center group-hover:mb-[2rem] group-hover:mt-[-1rem] group-hover:scale-205 group-hover:text-3xl transition-all duration-500'>Web Development</h2>
    <p className='text-center text-1xl mt-3 font-bold'>$149</p>
    <div className='pt-4'>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#45c99d] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#45c99d]  mt-1 w-1/3" />
            <p className=" border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden ">
                Lorem epsum vvhiklvu;hgugluh g;ihn of the printing utdlevafe; a8fvef udialevfofealfyv udfav duifaylvef udfyaove8 7adftefkb
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#45c99d] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply dumm.
            </p>
        </div>
    </div>
    <button onClick={() =>errorse('Not Available Right now')} className='bg-[#45c99d] w-[200px] rounded-md font-medium py-2 mx-auto mt-8 transition-all duration-300'>Start Trial</button>
</div>
{/* second card */}
 
 <div className='md:w-full md:h-[480px] sm:w-[90%] flex flex-col p-4 rounded-lg hover:scale-105 bg-slate-300 hover:bg-slate-400 group duration-300 shadow-xl'>
    <img className='w-20 mx-auto md:mt-[-3rem] hidden sm:mt-[-1rem] sm:block  transition-opacity duration-500 group-hover:opacity-0 group-hover:duration-300' src={double} />
    <h2 className='text-2xl mt-5 font-bold text-center group-hover:mb-[2rem] group-hover:mt-[-1rem] group-hover:scale-205 group-hover:text-3xl transition-all duration-500'>Digital Marketting</h2>
    <p className='text-center text-1xl mt-3 font-bold'>$449</p>
    <div className='pt-4'>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#5c6794] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#5c6794] mt-1 w-1/3" />
            <p className=" border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden ">
                Lorem epsum vvhiklvu;hgugluh g;ihn of the printing utdlevafe; a8fvef udialevfofealfyv udfav duifaylvef udfyaove8 7adftefkb
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#5c6794] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply dumm.
            </p>
        </div>
    </div>
    <button onClick={() =>successed('Login to Our page')} className='bg-[#5c6794] w-[200px] rounded-md font-medium py-2 mx-auto mt-8 transition-all duration-300'>Start Trial</button>
</div>


 {/* Third Card */}
 <div className='md:w-full h-[480px]  sm:w-[90%]  flex flex-col p-4 rounded-lg hover:scale-105 hover:bg-gray-300 group duration-300 shadow-xl'>
    <img className='w-[75px] h-auto mx-auto md:mt-[-3rem] hidden sm:mt-[-1rem] sm:block bg-slate-400 transition-opacity duration-500 group-hover:opacity-0 group-hover:duration-300' src={triple} />
    <h2 className='text-2xl mt-5 font-bold text-center group-hover:mb-[2rem] group-hover:mt-[-1rem] group-hover:scale-205 group-hover:text-3xl transition-all duration-500'>Web Development</h2>
    <p className='text-center  text-1xl mt-3 font-bold'>$149</p>
    <div className='pt-4'>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#00df9a] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#00df9a] mt-1 w-1/3" />
            <p className=" border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden ">
                Lorem epsum vvhiklvu;hgugluh g;ihn of the printing utdlevafe; a8fvef udialevfofealfyv udfav duifaylvef udfyaove8 7adftefkb
            </p>
        </div>
        <div className="flex py-4 ml-[-3rem]">
            <IoIosCheckmarkCircle className="text-[#00df9a] mt-1 w-1/3" />
            <p className="border-b group-hover:border-neutral-400 group-hover:border-b-1 ml-[-2rem] w-2/3 h-[50px] overflow-hidden">
                Lorem epsum is simply dumm.
            </p>
        </div>
    </div>
    <button onClick={() =>errorse('Not Available Right now')} className='bg-[#00df9a] w-[200px] rounded-md font-medium py-2 mx-auto mt-8 transition-all duration-300'>Start Trial</button>
</div>
 


     </div>
    </div>
  )
}
