import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className="mt-6">
            <h1 className="py-4 text-lg font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex gap-2">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MovieList;
