// import React from 'react'
import HotelHunt from "../assets/proyect/hotelhunt.jpeg"
import Portfolio1 from "../assets/proyect/portfolio1.png"
import Portfolio2 from "../assets/proyect/portfolio2.png"
import Portfolio3 from "../assets/proyect/portfolio4.png"
import Portfolio4 from "../assets/proyect/portfolio3.png"
import Portfolio5 from "../assets/proyect/portfolio5.png"

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "React JS Aplication",
    demo: "",
    code: "https://github.com/public-apis/public-apis?tab=readme-ov-file",
  },
  {
    id: 2,
    image: HotelHunt,
    title: "",
    demo: "",
    code: "",
  },
  {
    id: 3,
    image: Portfolio2,
    title: "",
    demo: "",
    code: "",
  },
  {
    id: 4,
    image: Portfolio3,
    title: "",
    demo: "",
    code: "",
  },
  {
    id: 5,
    image: Portfolio4,
    title: "",
    demo: "",
    code: "",
  },
  {
    id: 6,
    image: Portfolio5,
    title: "",
    demo: "",
    code: "",
  },
]

const Portofolio2 = () => {
  return (
    <div id="portfolio" className="w-full md:h-screen text-gray-300 bg-gradient-to-b from-black to-gray-800 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-500">Portfolio</p>
            <p className="py-6">Mira algunos de mis trabajos aquí</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              data.map(({id, image, title, demo, code}) => {
                return (
                  <div key={id} style={{backgroundImage: `url(${image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                      {title}
                    </span>
                    <div className="pt-8 text-center">
                        <a href={demo}>
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href={code}>
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                    </div>
                </div>
            </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Portofolio2
