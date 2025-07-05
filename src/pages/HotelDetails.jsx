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
            name: 'Kiikalloh Grand Resort',
            location: 'Machakos-Makutano road',
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
            name: 'A&L',
            location: 'Machakos-Makutano road',
            rating: 4.2,
            description: 'A peaceful resort with stunning views of the Machakos hills.',
            amenities: ['WiFi', 'Spa', 'Restaurant', 'Garden', 'Conference Room'],
            price: 6500,
            images: [
                'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 3,
            name: 'The Kyaka Hotel ',
            location: 'Machakos Town Center',
            rating: 4.0,
            description: 'A charming lodge offering comfortable accommodation with traditional Kenyan hospitality.',
            amenities: ['WiFi', 'Restaurant', 'Bar', 'Garden', 'Laundry Service'],
            price: 4500,
            images: [
                'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 4,
            name: 'Semara Hotel',
            location: 'Machakos Hills',
            rating: 3.8,
            description: 'Nestled in the scenic hills with breathtaking views and modern amenities.',
            amenities: ['WiFi', 'Swimming Pool', 'Restaurant', 'Conference Room', 'Gym'],
            price: 5200,
            images: [
                'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 5,
            name: 'Gelian Hotel',
            location: 'Machakos CBD',
            rating: 4.1,
            description: 'Perfect for business travelers with modern facilities and central location.',
            amenities: ['WiFi', 'Business Center', 'Restaurant', 'Conference Room', 'Parking'],
            price: 4800,
            images: [
                'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 6,
            name: 'Machakos Garden Hotel',
            location: 'Machakos Town',
            rating: 3.9,
            description: 'A peaceful hotel surrounded by beautiful gardens and local flora.',
            amenities: ['WiFi', 'Restaurant', 'Garden', 'Bar', 'Room Service'],
            price: 4200,
            images: [
                'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 7,
            name: 'Machakos Lysak Hotel',
            location: 'Machakos-Makutano road',
            rating: 4.3,
            description: 'Luxury accommodation with executive services and premium amenities.',
            amenities: ['WiFi', 'Executive Lounge', 'Restaurant', 'Spa', 'Conference Room', 'Gym'],
            price: 7200,
            images: [
                'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 8,
            name: 'Sun Glam Hotel',
            location: 'opposite Machakos university',
            rating: 3.7,
            description: 'Cozy inn located in the heart of Machakos valley with friendly service.',
            amenities: ['WiFi', 'Restaurant', 'Bar', 'Garden', 'Parking'],
            price: 3800,
            images: [
                'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 9,
            name: 'Fanela gardens and resort',
            location: 'Machakos-makutano road',
            rating: 4.4,
            description: 'A heritage hotel that combines traditional architecture with modern comfort.',
            amenities: ['WiFi', 'Heritage Tours', 'Restaurant', 'Cultural Center', 'Conference Room'],
            price: 5800,
            images: [
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop'
            ]
        },
        {
            id: 10,
            name: 'Visum Park',
            location: 'Machakos-makutano road',
            rating: 3.6,
            description: 'Budget-friendly hotel with essential amenities and comfortable rooms.',
            amenities: ['WiFi', 'Restaurant', 'Parking', 'Laundry Service'],
            price: 3200,
            images: [
                'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
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
