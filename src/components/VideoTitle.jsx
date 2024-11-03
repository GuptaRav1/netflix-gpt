import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-14 absolute w-screen aspect-video bg-gradient-to-r from-black text-white'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='w-1/3 my-6'>{overview}</p>
            <div>
                <button className='rounded-sm bg-white text-black text-lg px-8 py-2 hover:bg-opacity-85'>Play</button>
                <button className='bg-gray-700 rounded-sm m-2 bg-opacity-85 text-white text-lg px-8 py-2'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
