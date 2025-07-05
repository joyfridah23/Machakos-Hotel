import React from 'react'
import bg from '../assets/bg.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center  h-screen bg-gray-100'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='flex flex-col  ml-20 items-start justify-start'>
                <p className='text-6xl text-red-800 font-bold' >
                    Machakos Hotels
                </p>
                <p className='text-2xl text-white mt-2'>Your Comfort, Our Priority</p>
                <p className='text-lg text-white mt-2'>Experience the best hospitality in Machakos</p>
                <button onClick={() => navigate('/hotels')} className='mt-4 px-10 py-2 bg-red-800 text-white rounded-full cursor-pointer hover:bg-green-700 transition duration-300'>
                    Explore
                </button>
            </div>

        </div>
    )
}

export default Home