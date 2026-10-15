import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
	const popularMovies = useSelector((store) => store.movies.popularMovies);
	const dispatch = useDispatch();
	const getMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/popular?page=1",
				API_OPTIONS
			);
			if (!response.ok) return;
			const data = await response.json();
			if (data?.results) dispatch(addPopularMovies(data.results));
		} catch (error) {
			console.error("Error fetching popular movies:", error);
		}
	};

	useEffect(() => {
		!popularMovies && getMovies();
	}, []);
};

export default usePopularMovies;
