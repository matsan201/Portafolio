// import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className="w-full h-screen bg-gradient-to-b  from-black to-gray-800 p-4 text-white ">
      <div className=" flex flex-col p-4 justify-center max-w-sreen-lg mx-auto h-full">
        <div className="pb-8 text-center">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Envíe el siguiente formulario para ponerse en contacto conmigo</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/9e994c17-169b-4682-bbd5-ab2b01f4454d" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Introduzca su nombre" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <input type="text" name="email" placeholder="Introduzca su email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <textarea name="message" placeholder="Introduzca su mensaje" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Sumbit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
