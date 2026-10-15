import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
	const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

	const dispatch = useDispatch();
	const getMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/upcoming?page=1",
				API_OPTIONS
			);
			if (!response.ok) return;
			const data = await response.json();
			if (data?.results) dispatch(addUpcomingMovies(data.results));
		} catch (error) {
			console.error("Error fetching upcoming movies:", error);
		}
	};

	useEffect(() => {
		!upcomingMovies && getMovies();
	}, []);
};

export default useUpcomingMovies;
