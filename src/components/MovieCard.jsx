import React from 'react'
import { IMG_CDN_URL } from '../utils/constatnts'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-40 rounded-lg'>
            <img className='rounded-sm' src={IMG_CDN_URL + posterPath} alt="" />
        </div>
    )
}

export default MovieCard
