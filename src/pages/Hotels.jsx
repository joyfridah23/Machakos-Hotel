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
    return (
        <div className='flex flex-col items-center justify-center mt-20 md:p-10 p-4 bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {hotels.map((hotel) => (
                    <div key={hotel.id} className='bg-white shadow-lg  rounded-lg p-4'>
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