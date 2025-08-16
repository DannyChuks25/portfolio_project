import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import { IoCloseSharp } from 'react-icons/io5'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleLinkClick = () => {
        setMenu(false);
    }
    const items = [
        {id: 1, text: "Home", to: "/"},
        {id: 2, text: "TodoList", to: "/todo"},
        {id: 3, text: "Shop", to: "/shop"},
        {id: 4, text: "Contact", to: "/contact"}
    ]

  return (
    <div>
      <div className='bg-black h-20 px-4 py-4 flex mx-auto md:flex justify-between items-center navbar'>
        <div className='text-xl md:text-2xl'>
            <span className='text-purple-200'>Dan</span>
            <span className='text-purple-500'>Portfolio</span>
        </div>

        <div>
            <ul className='text-purple-100 hidden md:flex space-x-4'>
                {
                    items.map(({id, text, to}) => (
                        <li key={id} className='hover:text-purple-400 cursor-pointer'>
                            <Link to={to}>{text}</Link>
                        </li>
                    ))
                }
                </ul>
        </div>

        <a href="#" className='bg-purple-600 hidden md:flex text-white border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700'>Hire Me</a>
        <div 
        className='cursor-pointer md:hidden'
        onClick={() => setMenu(!menu)}
        >
            {
                menu ? <IoCloseSharp className='text-purple-200' size={30}/> : <AiOutlineMenu className='text-purple-200' size={30} />
            }
        </div>
      </div>

      {/* Sidebar */}
      <div>
        {
            menu &&
            <div className='bg-white md:hidden w-2/3 h-screen z-10 fixed top-0 right-0 transition-all duration-1000 ease-in'>
                <div 
                  className='cursor-pointer absolute right-3 top-5'
                  onClick={() => setMenu(!menu)}
                >
                    {
                        menu ? <IoCloseSharp className='text-purple-700' size={40}/> : <AiOutlineMenu className='text-purple-700' size={30} />
                    }
                </div>

                <div className='flex flex-col absolute top-[25%] left-[45%]'>
                    <ul>
                        {
                            items.map(({id, text, to}) => (
                                <li 
                                key={id} 
                                onClick={handleLinkClick}
                                className='hover:text-purple-600 cursor-pointer text-xl md:text-2xl text-center mb-6'>
                                    <Link to={to}>{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <a href="#" className='bg-purple-600 md:flex text-white border-0 rounded-full px-4 py-2 transition-all duration-300 hover:bg-purple-700'>Hire Me</a>
                </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
