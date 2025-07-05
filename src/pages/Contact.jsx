import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'a510e9a3-9ed7-47d5-b3c0-dda6d4c32a4d', // Replace with your actual Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message
                })
            })

            const result = await response.json()

            if (result.success) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Get in touch with us for hotel reservations, inquiries, or any assistance you need.
                        We're here to help make your stay in Machakos unforgettable.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Information */}
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>Get in Touch</h2>

                        <div className='space-y-6'>
                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-800 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-900'>Address</h3>
                                    <p className='text-gray-600'>
                                        Machakos Town, Machakos County<br />
                                        Kenya
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-800 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-900'>Phone</h3>
                                    <p className='text-gray-600'>+254 700 123 456</p>
                                    <p className='text-gray-600'>+254 722 987 654</p>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-800 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-900'>Email</h3>
                                    <p className='text-gray-600'>info@machakoshotels.com</p>
                                    <p className='text-gray-600'>reservations@machakoshotels.com</p>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='bg-red-800 text-white p-3 rounded-full'>
                                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold text-gray-900'>Business Hours</h3>
                                    <p className='text-gray-600'>
                                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                                        Saturday - Sunday: 9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className='mt-8 pt-8 border-t border-gray-200'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Follow Us</h3>
                            <div className='flex space-x-4'>
                                <a href='#' className='bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                                    </svg>
                                </a>
                                <a href='#' className='bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                                    </svg>
                                </a>
                                <a href='#' className='bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300'>
                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                        <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>Send us a Message</h2>

                        {submitStatus === 'success' && (
                            <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Full Name *
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                                        placeholder='Enter your full name'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Email Address *
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                                        placeholder='Enter your email address'
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                                        placeholder='Enter your phone number'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-2'>
                                        Subject *
                                    </label>
                                    <select
                                        id='subject'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                                    >
                                        <option value=''>Select a subject</option>
                                        <option value='Hotel Reservation'>Hotel Reservation</option>
                                        <option value='General Inquiry'>General Inquiry</option>
                                        <option value='Feedback'>Feedback</option>
                                        <option value='Complaint'>Complaint</option>
                                        <option value='Partnership'>Partnership</option>
                                        <option value='Other'>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
                                    Message *
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent'
                                    placeholder='Enter your message here...'
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition duration-300 ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-800 hover:bg-red-700'
                                    }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>




                {/* Map Section */}
                {/* <div className='mt-12 bg-white rounded-lg shadow-lg p-8'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6'>Find Us</h2>
                    <div className='aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890123!2d37.2634!3d-1.5177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47c1a6b6b6b6%3A0x1234567890abcdef!2sMachakos%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske'
                            width='100%'
                            height='400'
                            style={{ border: 0 }}
                            allowFullScreen=''
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className='rounded-lg'
                        ></iframe>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Contact