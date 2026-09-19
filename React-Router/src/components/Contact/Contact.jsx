import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-[700px] bg-white py-12">

            <div className="max-w-6xl w-full mx-auto px-6">

                <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left Side */}
                        <div className="p-8 bg-gray-100 rounded-lg">

                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold">
                                Get in Touch
                            </h1>

                            <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Let's connect and build something great together.
                            </p>

                            {/* Location */}
                            <div className="flex items-center mt-10 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-orange-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    Haryana, India
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center mt-6 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-orange-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    +91 XXXXX XXXXX
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-6 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-orange-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <div className="ml-4 text-md tracking-wide font-semibold">
                                    partikdhiman@example.com
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Form */}
                        <form className="p-8 flex flex-col justify-center">

                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-700 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-5">
                                <label htmlFor="email" className="text-gray-700 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-5">
                                <label htmlFor="message" className="text-gray-700 font-medium">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-orange-500 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-5 transition duration-300"
                            >
                                Submit
                            </button>

                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}