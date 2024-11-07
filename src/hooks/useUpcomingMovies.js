import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
	const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

	const dispatch = useDispatch();
	const getMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?page=1",
			API_OPTIONS
		);

		const data = await response.json();
		dispatch(addUpcomingMovies(data.results));
	};

	useEffect(() => {
		!upcomingMovies && getMovies();
	}, []);
};

export default useUpcomingMovies;
