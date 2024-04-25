import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar2 = () => {

    const [nav, setNav] = useState(false)

    const handleNavToggle = () => {
        setNav(!nav);
      };

    const handleLinkClick = () => {
        // Cerrar el menú al hacer clic en un enlace
        setNav(false);
      };

    return (
        <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed" >
            <div>
                <h1 className="text-5xl font-signature ml-2">MS</h1>
            </div>

            <ul className="hidden md:flex">
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <a href="#home">Home</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <a href="#about">About</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <a href="#experience">Experience</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div onClick={handleNavToggle} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <a href="#home" onClick={handleLinkClick}>Home</a>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <a href="#about" onClick={handleLinkClick}>About</a>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <a href="#experience" onClick={handleLinkClick}>Experience</a>
                    </li>
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <a href="#contact" onClick={handleLinkClick}>Contact</a>
                    </li>
                </ul>
            )}

        </nav>
    )
}

export default NavBar2