/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { FaTelegram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { RiInstagramFill } from "react-icons/ri"
const Footer = () => {
  return (
    <footer className="mx-auto m-auto h-[300] mt sm:h-[250px]" >
      <div className="bg-black h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className="text-white font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className="flex items-center justify-center gap-8 sm:gap-5">
          <a href="" className="box font-medium text-white flex items-center justify-center flex-col">
            <FaTelegram className="text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a href="" className="box font-medium text-white flex items-center justify-center flex-col">
            <IoLogoWhatsapp className="text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a href="" className="box font-medium text-white flex items-center justify-center flex-col">
            <RiInstagramFill className="text-white text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="text-white sm:text-[12px]">
          | Copyright &copy; <span>2023 Matias Sanchez</span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </footer>
  )
}

export default Footer
