import { API_OPTIONS } from "../utils/constatnts";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	const trailerVideo = useSelector((store) => store.movies.trailerVideo);

	const getMovieTrailer = async () => {
		try {
			const data = await fetch(
				"https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
				API_OPTIONS
			);
			if (!data.ok) return;
			const json = await data.json();
			if (!json?.results) return;

			const trailers = json.results.filter((video) => video.type === "Trailer");
			const trailer = trailers.length ? trailers[0] : json.results[0];
			if (trailer) dispatch(addMovieTrailer(trailer));
		} catch (error) {
			console.error("Error fetching movie trailer:", error);
		}
	};
	useEffect(() => {
		!trailerVideo && getMovieTrailer();
	}, []);
};

export default useMovieTrailer;
