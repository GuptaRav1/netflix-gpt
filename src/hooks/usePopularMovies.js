import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
	const popularMovies = useSelector((store) => store.movies.popularMovies);
	const dispatch = useDispatch();
	const getMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?page=1",
			API_OPTIONS
		);
		const data = await response.json();
		dispatch(addPopularMovies(data.results));
	};

	useEffect(() => {
		!popularMovies && getMovies();
	}, []);
};

export default usePopularMovies;
