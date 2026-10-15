import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
	const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
	const dispatch = useDispatch();
	const getMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/top_rated?page=1",
				API_OPTIONS
			);
			if (!response.ok) return;
			const data = await response.json();
			if (data?.results) dispatch(addTopRatedMovies(data.results));
		} catch (error) {
			console.error("Error fetching top rated movies:", error);
		}
	};

	useEffect(() => {
		!topRatedMovies && getMovies();
	}, []);
};

export default useTopRatedMovies;
