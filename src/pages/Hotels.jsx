import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/semara/image (1).png'
import image2 from '../assets/semara/image (2).png'
import image3 from '../assets/semara/image (3).png'
import image4 from '../assets/semara/image (4).png'
import image5 from '../assets/semara/image (5).png'


const Hotels = () => {
    const navigate = useNavigate()
    const hotels = [
        {
            id: 1,
            name: 'Machakos Grand Hotel',
            location: 'Machakos Town',
            rating: 4.5,
            description: 'A luxurious hotel in the heart of Machakos with modern amenities and excellent service.',
            amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Conference Room', 'Spa', 'Gym', 'Bar'],
            price: 8500,
            images: [
                image1,
                image2,
                image3,
                image4,
                image5
            ]
        },
        {
            id: 2,
            name: 'Machakos Resort & Spa',
            location: 'Machakos Hills',
            rating: 4.2,
            description: 'A peaceful resort with stunning views of the Machakos hills.',
            amenities: ['WiFi', 'Spa', 'Restaurant', 'Garden', 'Conference Room'],
            price: 6500,
            images: [
                'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop'
            ]
        }
    ]
    return (
        <div className='flex flex-col items-center justify-center p-10 bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {hotels.map((hotel) => (
                    <div key={hotel.id} className='bg-white shadow-lg rounded-lg p-6'>
                        <img src={hotel.images[0]} alt={hotel.name} className='w-full h-48 object-cover rounded-lg mb-4' />
                        <h2 className='text-xl font-semibold mb-2'>{hotel.name}</h2>
                        <p className='text-gray-600 mb-2'>{hotel.location}</p>
                        <p className='text-gray-800 mb-4'>{hotel.description}</p>
                        <p className='text-green-600 font-bold mb-2'>Ksh {hotel.price} per night</p>
                        <div className='flex flex-wrap gap-2'>
                            {hotel.amenities.map((amenity, index) => (
                                <span key={index} className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm'>{amenity}</span>
                            ))}
                        </div>
                        <button
                            onClick={() => navigate(`/hotels/${hotel.id}`)}
                            className='mt-4 px-6 py-2 bg-red-800 text-white rounded-full hover:bg-green-700 transition duration-300'
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hotels