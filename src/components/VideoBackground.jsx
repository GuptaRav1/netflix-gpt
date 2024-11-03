import { useSelector } from 'react-redux'
import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId)
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    if (!trailerVideo) return

    return (
        <div className="">
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&si=rvIlppHoOi9yQrpj`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            >
            </iframe>


        </div>
    )
}

export default VideoBackground
