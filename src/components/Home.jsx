// import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    const scrollToPortfolio = () => {
      const portfolioElement = document.getElementById('portfolio');
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const button = document.getElementById('portfolioButton');
    if (button) {
      button.addEventListener('click', scrollToPortfolio);

      return () => {
        button.removeEventListener('click', scrollToPortfolio);
      };
    }
  }, []);
  
  return (
    <div id='home' className=' flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matias Sanchez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy un Full Stack Developer</h2>
            <p className=' text-[#8892b0] py-4 max-w-[700px]:' >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa adipisci esse quo aliquam reiciendis a possimus laborum deserunt iure, quisquam quibusdam. Ea incidunt totam officia, magni deleniti neque ipsam?</p>
            <div>
                <button id='portfolioButton' className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolios
                    <span className='hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home