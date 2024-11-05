import React from 'react'
import { IMG_CDN_URL } from '../utils/constatnts'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-40 transition-transform duration-300 ease-in-out transform hover:scale-125'>
            <img
                className='rounded-sm'
                src={IMG_CDN_URL + posterPath}
                alt="movie-poster" />
        </div>
    )
}

export default MovieCard
