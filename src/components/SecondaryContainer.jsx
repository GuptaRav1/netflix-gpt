import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		movies.nowPlayingMovies && (
			<div className="relative z-10 pl-6 mt-10 md:-mt-56 md:pl-14">
				<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
				<MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
				<MovieList title={"Popular"} movies={movies.popularMovies} />
				<MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
			</div>
		)
	);
};

export default SecondaryContainer;
