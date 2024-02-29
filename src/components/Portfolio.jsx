// import React from 'react'
import hotelhunt from '../assets/hotelhunt.jpeg'
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'
const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: hotelhunt
        },
        {
            id: 2,
            src: portfolio1
        },
        {
            id: 3,
            src: portfolio2
        },
        {
            id: 4,
            src: portfolio3
        },
        {
            id: 5,
            src: portfolio4
        },
        {
            id: 6,
            src: portfolio5
        },
    ]


  return (
    <div id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg pg-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portolio</p>
                <p className='py-6'>Mira algunos de mis trabajos aquí</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolio.map(({id, src}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo
                        </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code
                        </button>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio