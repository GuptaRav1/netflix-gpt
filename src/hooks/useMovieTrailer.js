import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector((store) => store.movies.trailerVideo);

	const getMovieTrailer = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
			API_OPTIONS
		);
		const json = await data.json();

		const trailers = json.results.filter((video) => video.type === "Trailer");
		const trailer = trailers.length ? trailers[0] : json.results[0];
		dispatch(addMovieTrailer(trailer));
	};
	useEffect(() => {
		!trailerVideo && getMovieTrailer();
	}, []);
};

export default useMovieTrailer;
