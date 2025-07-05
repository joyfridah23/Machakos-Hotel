import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className="bg-red-800 flex items-center justify-between z-50 shadow-md shadow-gray-500  md:p-4 p-5  w-full  ">
            <div>
                <p className='text-2xl text-white font-semibold animate-bounce'>Machakos <span className=''>Hotels</span> </p>
            </div>
            <div className='md:flex hidden rounded-full p-4 border border-black'>
                <ul className="flex space-x-7">
                    <li onClick={() => navigate('/')} className="text-white hover:text-gray-300 cursor-pointer">Home</li>
                    <li onClick={() => navigate('/hotels')} className="text-white hover:text-gray-300 cursor-pointer">Hotels</li>
                    <li onClick={() => navigate('/contact')} className="text-white hover:text-gray-300 cursor-pointer">Contact Us</li>
                    <li onClick={() => navigate('/about')} className="text-white hover:text-gray-300 cursor-pointer">About Us</li>
                </ul>
            </div>
            {isOpen && (
                <div className='md:hidden absolute top-16 right-0 bg-red-800 w-full p-4 rounded-lg shadow-lg'>
                    <ul className="flex flex-col space-y-4">
                        <li onClick={() => { navigate('/'); toggleMenu() }} className="text-white hover:text-gray-300 cursor-pointer">Home</li>
                        <li onClick={() => { navigate('/hotels'); toggleMenu() }} className="text-white hover:text-gray-300 cursor-pointer">Hotels</li>
                        <li onClick={() => { navigate('/contact'); toggleMenu() }} className="text-white hover:text-gray-300 cursor-pointer">Contact Us</li>
                        <li onClick={() => { navigate('/about'); toggleMenu() }} className="text-white hover:text-gray-300 cursor-pointer">About Us</li>
                    </ul>
                </div>
            )}
            <div className='md:hidden flex items-center justify-center rounded-full cursor-pointer'>
                {!isOpen ? (
                    <IoMenu onClick={toggleMenu} className='text-white text-3xl' />
                ) : (
                    <IoMdClose onClick={toggleMenu} className='text-white text-3xl' />
                )}

            </div>
        </nav>
    )
}

export default Navbar