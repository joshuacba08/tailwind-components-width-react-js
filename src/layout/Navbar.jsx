import React from 'react'
import TailwindcssLogo from '../assets/icons/tailwindcss.svg'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header className='w-full p-3 shadow-lg bg-white'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        
        <div className='flex h-10 w-20 bg-black justify-between px-2 items-center rounded shadow-sm'>
          <div className='w-8'>
            <img className='w-full h-full object-contain' src={TailwindcssLogo} alt="" srcset="" />
          </div>
          <h1 className='text-2xl font-bold text-white'>TC</h1>
        </div>

        <MdMenu fontSize={30} className="sm:hidden"/>

        <nav className='hidden sm:block'>
          <ul className='flex gap-6'>
            <li className='font-semibold cursor-pointer'>Inicio</li>
            <li className='font-semibold cursor-pointer'>Documentación</li>
            <li className='font-semibold cursor-pointer'>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
