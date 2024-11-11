import React from "react";
import { IMG_CDN_URL } from "../utils/constatnts";

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return null;
	return (
		<div className="md:w-40 w-36">
			<img
				className="rounded-sm"
				src={IMG_CDN_URL + posterPath}
				alt="movie-poster"
			/>
		</div>
	);
};

export default MovieCard;
