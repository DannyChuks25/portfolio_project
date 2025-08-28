import React from 'react'

import { Link } from 'react-router-dom';

const Footer = () => {
    const items = [
        { id: 1, text: "Home", to: "/" },
        { id: 2, text: "TodoList", to: "/todo" },
        { id: 3, text: "Shop", to: "/shop" },
        { id: 4, text: "Contact", to: "/contact" },
        {id: 5, text: "About", to: "/about"},
    ]
    return (
        <div>
            <div className='flex justify-center'>
                <div className='bg-black h-20 border-1 border-t-white w-full md:w-[800px] lg:w-[1000px]  px-4 py-20 flex mx-auto md:flex justify-between items-center'>
                    <div className='text-xl md:text-2xl'>
                        <span className='text-purple-200'>Dan</span>
                        <span className='text-purple-500'>Portfolio</span>
                    </div>

                    <div className='text-white'>All Rights Reserved &copy; 2025</div>

                    <div>
                        <ul className='text-purple-100 md:flex-col space-x-4'>
                            {
                                items.map(({ id, text, to }) => (
                                    <li key={id} className='hover:text-purple-400 cursor-pointer'>
                                        <Link to={to}>{text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
