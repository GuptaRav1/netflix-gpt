import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GPTMovieSuggestions = () => {
	const gpt = useSelector((store) => store.gpt);

	const { geminiResults, tmdbResults } = gpt;

	if (!geminiResults) return null;

	return (
		<div className="px-6">
			{geminiResults.map((movie, index) => (
				<MovieList key={index} title={movie} movies={tmdbResults[index]} />
			))}
		</div>
	);
};

export default GPTMovieSuggestions;
