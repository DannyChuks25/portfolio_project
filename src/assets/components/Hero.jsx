import React from 'react'
import photo from "../img1.png"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  // const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center'>
      <div id='home' className='text-white h-[85vh] lg:border-red-500 xl:w-[1000px] md:mt-[20px] md:flex flex-row-reverse md:gap-x-[130px] justify-around'>
        <div className="img-container size-70 md:size-100 flex mx-auto md:mx-0 cursor-pointer">
            <img src={photo} alt="" className='photo transition-all duration-300' />
        </div>
        <div className="text text-center mt-6 text-xl md:mt-40 md:text-left">
            <h3 className=''>Hello!,</h3>
            <div className='md:text-2xl font-bold lg:text-3xl xl:text-4xl'>
                <h2 className='bg-gradient-to-r from-purple-200 to-purple-900 bg-clip-text text-transparent'>I am Chukwu Daniel</h2>
                <h2 className='mb-6'>A Web Developer</h2>
            </div>
            <a href="/contact" className='bg-purple-600 text-white text-[1rem] border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700'>Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
