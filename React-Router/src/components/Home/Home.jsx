import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">

                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Build. Learn. Create.
                            <span className="hidden sm:block text-4xl">
                                Turn Ideas Into Reality
                            </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>

                            &nbsp; Explore Now
                        </Link>

                    </div>
                </div>

                {/* First Image */}
                <div className="absolute left-4 sm:left-16 top-8 sm:top-12 w-80 sm:w-96">
                    <img
                        className="w-full h-auto object-contain"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yDrfHZ_Yy6f090A5RT1nXtmO1qBhKHDDlg766RkvztNW88zGVFPQhzg&s=10"
                        alt="Developer working"
                    />
                </div>

            </aside>

            {/* Second Image */}
            <div className="grid place-items-center mt-16 sm:mt-20">

                <img
                    className="w-64 sm:w-96 h-auto object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_df0MCKlsaG-ImCdC6Tk6MuTMU7zdgCqT7hQAMgFhQ&s=10"
                    alt="Team collaboration"
                />

            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Code. Learn. Build. Repeat.
            </h1>

        </div>
    )
}