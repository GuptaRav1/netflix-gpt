import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const nowPlayingMovies = useSelector(
		(store) => store.movies.nowPlayingMovies
	);
	const dispatch = useDispatch();
	const getMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		);
		const data = await response.json();
		dispatch(addNowPlayingMovies(data.results));
	};

	useEffect(() => {
		!nowPlayingMovies && getMovies();
	}, []);
};

export default useNowPlayingMovies;
