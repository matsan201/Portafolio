/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import html from '../assets/experience/html-5.png'
import css from '../assets/experience/css-3.png'
import javascript from '../assets/experience/js.png'
import react from '../assets/experience/react.png'
import redux from '../assets/experience/Redux.png'
import mongo from '../assets/experience/mongo.png'
import postgreSQL from '../assets/experience/postgre.png'
import tailwind from '../assets/experience/tailwind.png'
import github from '../assets/experience/github.png'


const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
        },
        {
            id: 4,
            src: react,
            title: "React",
        },
        {
            id: 5,
            src: redux,
            title: "Redux",
        },
        {
            id: 6,
            src: mongo,
            title: "MongoDB",
        },
        {
            id: 7,
            src: postgreSQL,
            title: "PostgreSQL",
        },
        {
            id: 8,
            src: tailwind,
            title: "TailwindCSS",
        },
        {
            id: 9,
            src: github,
            title: "GitHub",
        },
    ]
  return (
    <div id='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='p-6'>These are the technologies I'worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id, src, title}) => (
                    <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))
            }
            
        </div>

      </div>
    </div>
  )
}

export default Experience
