import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstatns";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constatnts";
import { addMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
	const langKey = useSelector((store) => store.config.language);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const searchText = useRef(null);
	const dispatch = useDispatch();

	const searchMovieTMDB = async (movieName) => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/search/movie?query=" +
					encodeURIComponent(movieName) +
					"&include_adult=true&page=1",
				API_OPTIONS
			);
			if (!response.ok) return [];
			const data = await response.json();
			return data.results || [];
		} catch (error) {
			console.error("TMDB search error:", error);
			return [];
		}
	};

	const handleGPTSearch = async () => {
		if (!searchText.current?.value || isLoading) return;

		setErrorMessage(null);
		setIsLoading(true);

		const prompt =
			"Act as a movie recommendation system and suggest some movies for the query: " +
			searchText.current.value +
			". Only give names of 5 movies separated by commas. Do not include numbering, bullet points, or markdown. For Example Dhamaal, Golmaal, Koi Mil Gaya, Rang de Basanti, Chup Chup ke";

		try {
			const result = await gemini.generateContent(prompt);
			const text = result?.response?.text();
			if (!text) {
				setIsLoading(false);
				return;
			}
			const moviesArray = text.split(",").map((m) => m.trim().replace(/^[\d.\s*]+/, "")).filter(Boolean);

			const promiseArray = moviesArray.map((movie) => searchMovieTMDB(movie));
			const tmdbResults = await Promise.all(promiseArray);

			dispatch(
				addMovieResults({
					geminiResults: moviesArray,
					tmdbResults: tmdbResults,
				})
			);
		} catch (error) {
			console.error("GPT Search Error:", error);
			setErrorMessage("AI recommendation service is currently busy. Please try again in a moment.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="flex flex-col items-center justify-center w-full p-5 bg-gray-800 md:gap-2 h-72">
				<div className="flex items-center justify-center w-full md:gap-2">
					<input
						ref={searchText}
						className="w-full p-2 text-gray-200 placeholder-gray-500 transition duration-200 md:text-base md:p-3 md:w-96 bg-slate-900 focus:outline-none focus:ring-1 focus:ring-red-400 focus:bg-slate-800"
						type="text"
						placeholder={lang[langKey].gptSearchPlaceholder}
					/>
					<button
						onClick={handleGPTSearch}
						disabled={isLoading}
						className={`px-4 py-1 font-semibold text-white transition duration-200 transform bg-red-500 shadow-md md:px-6 md:py-2 md:text-lg hover:bg-red-600 hover:scale-105 ${
							isLoading ? "opacity-60 cursor-not-allowed" : ""
						}`}>
						{isLoading ? "Searching..." : lang[langKey].search}
					</button>
				</div>
				{errorMessage && (
					<p className="mt-3 text-sm font-semibold text-red-400">{errorMessage}</p>
				)}
			</form>
		</div>
	);
};

export default GPTSearchBar;
