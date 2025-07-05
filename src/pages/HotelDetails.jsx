import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import image1 from '../assets/semara/image (1).png'
import image2 from '../assets/semara/image (2).png'
import image3 from '../assets/semara/image (3).png'
import image4 from '../assets/semara/image (4).png'
import image5 from '../assets/semara/image (5).png'

const HotelDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(0)

    // Hotel data (same as in Hotels.jsx - in a real app, this would come from a context or API)
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

    const hotel = hotels.find(h => h.id === parseInt(id))

    if (!hotel) {
        return (
            <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Hotel Not Found</h2>
                <button
                    onClick={() => navigate('/hotels')}
                    className='px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition duration-300'
                >
                    Back to Hotels
                </button>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-100 py-10'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Back button */}
                <button
                    onClick={() => navigate('/hotels')}
                    className='mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300'
                >
                    ← Back to Hotels
                </button>

                {/* Hotel Header */}
                <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
                    <div className='flex justify-between items-start mb-4'>
                        <div>
                            <h1 className='text-3xl font-bold text-gray-800 mb-2'>{hotel.name}</h1>
                            <p className='text-gray-600 text-lg mb-2'>{hotel.location}</p>
                            <div className='flex items-center mb-4'>
                                <span className='text-yellow-500 text-xl'>★</span>
                                <span className='text-gray-700 ml-1'>{hotel.rating}/5</span>
                            </div>
                        </div>
                        <div className='text-right'>
                            <p className='text-3xl font-bold text-green-600'>Ksh {hotel.price}</p>
                            <p className='text-gray-600'>per night</p>
                        </div>
                    </div>
                    <p className='text-gray-700 text-lg leading-relaxed'>{hotel.description}</p>
                </div>

                {/* Image Gallery */}
                <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Hotel Gallery</h2>

                    {/* Main Image */}
                    <div className='mb-4'>
                        <img
                            src={hotel.images[selectedImage]}
                            alt={`${hotel.name} - Image ${selectedImage + 1}`}
                            className='w-full h-96 object-cover rounded-lg shadow-md'
                        />
                    </div>

                    {/* Thumbnail Images */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                        {hotel.images.map((image, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300 ${selectedImage === index ? 'ring-4 ring-red-800' : 'hover:shadow-lg'
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`${hotel.name} - Thumbnail ${index + 1}`}
                                    className='w-full h-24 object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Amenities */}
                <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Amenities</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        {hotel.amenities.map((amenity, index) => (
                            <div key={index} className='flex items-center p-3 bg-gray-50 rounded-lg'>
                                <span className='text-green-600 mr-2'>✓</span>
                                <span className='text-gray-700'>{amenity}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HotelDetails
