import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-gradient-to-r from-indigo-800 to-indigo-900 text-white'>
      <div className='max-w-[1140px] mx-auto p-10 grid lg:grid-cols-3'>

        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
           Want to learn latest I.T skills?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className='my-4'>
          <div className='flex sm:flex-row items-center justify-between  w-full'>
            <input type='email'
            className='w-full p-3 rounded-md text-black border'
             placeholder='Enter Your Email' />
            <button className='bg-slate-900 text-white rounded-md font-medium w-[200px] ml-4 px-6 my-6 py-3'>Notify Me</button>
          </div>
          <p>We care bout the protection of your data. Read our<br/>
            <span className='text-grey-800 ml-1 cursor-pointer'>Privacy Policy.</span>
          </p>
        </div>

      </div>
    </div>
  )
}
