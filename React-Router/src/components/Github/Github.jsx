import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch('https://api.github.com/users/partikdhiman')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Top Section */}
                <div className="bg-gray-800 h-32"></div>

                {/* Profile Image */}
                <div className="flex justify-center -mt-16">
                    <img
                        src={data.avatar_url}
                        alt="GitHub Profile"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>

                {/* Profile Information */}
                <div className="text-center px-6 pb-8">

                    <h1 className="text-2xl font-bold text-gray-900 mt-4">
                        {data.name || 'Partik Dhiman'}
                    </h1>

                    <p className="text-gray-500 mt-1">
                        @{data.login}
                    </p>

                    <p className="text-gray-600 mt-4">
                        {data.bio || 'Developer | CSE Student'}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">

                        <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-xl font-bold text-gray-900">
                                {data.followers}
                            </p>
                            <p className="text-sm text-gray-500">
                                Followers
                            </p>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-xl font-bold text-gray-900">
                                {data.following}
                            </p>
                            <p className="text-sm text-gray-500">
                                Following
                            </p>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-xl font-bold text-gray-900">
                                {data.public_repos}
                            </p>
                            <p className="text-sm text-gray-500">
                                Repos
                            </p>
                        </div>

                    </div>

                    {/* GitHub Button */}
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-6 w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Visit GitHub Profile
                    </a>

                </div>

            </div>

        </div>
    )
} 

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/partikdhiman')
    return response.json();
}