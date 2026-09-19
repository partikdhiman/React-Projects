import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">

                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">

                    {/* Image */}
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                            alt="Coding"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="md:w-7/12 lg:w-6/12">

                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Building Ideas with Code
                        </h2>

                        <p className="mt-6 text-gray-600">
                            Welcome to my website! I enjoy learning new technologies,
                            building projects, and turning ideas into useful applications.
                        </p>

                        <p className="mt-4 text-gray-600">
                            I work with technologies like React, JavaScript, Node.js,
                            Express.js, MongoDB, and Tailwind CSS to create modern
                            and responsive web applications.
                        </p>

                        <p className="mt-4 text-gray-600">
                            My goal is to continuously learn, improve my skills,
                            and build projects that solve real-world problems.
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}