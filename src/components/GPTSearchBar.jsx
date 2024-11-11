import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstatns";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constatnts";
import { addMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
	const langKey = useSelector((store) => store.config.language);

	const searchText = useRef(null);

	const dispatch = useDispatch();

	const searchMovieTMDB = async (movieName) => {
		const response = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movieName +
				"&include_adult=true&page=1",
			API_OPTIONS
		);
		const data = await response.json();
		return data.results;
	};

	const handleGPTSearch = async () => {
		if (!searchText.current.value) return;

		const prompt =
			"Act as a movie recommendation system and suggest some movies for the query: " +
			searchText.current.value +
			". Only give names of 5 movies seperated by commas. For Example Dhamaal, Golmaal, Koi Mil Gaya, Rang de Basanti, Chup Chup ke";

		const result = await gemini.generateContent(prompt);
		if (!result?.response?.text()) return;
		const moviesArray = result?.response?.text().split(", ");

		const promiseArray = moviesArray.map((movie) => searchMovieTMDB(movie));
		const tmdbResults = await Promise.all(promiseArray);

		dispatch(
			addMovieResults({
				geminiResults: moviesArray,
				tmdbResults: tmdbResults,
			})
		);
	};

	return (
		<div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex items-center justify-center w-full p-5 bg-gray-800 md:gap-2 h-72">
				<input
					ref={searchText}
					className="w-full p-2 text-gray-200 placeholder-gray-500 transition duration-200 md:text-base md:p-3 md:w-96 bg-slate-900 focus:outline-none focus:ring-1 focus:ring-red-400 focus:bg-slate-800"
					type="text"
					placeholder={lang[langKey].gptSearchPlaceholder}
				/>
				<button
					onClick={handleGPTSearch}
					className="px-4 py-1 font-semibold text-white transition duration-200 transform bg-red-500 shadow-md md:px-6 md:py-2 md:text-lg hover:bg-red-600 hover:scale-105">
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
