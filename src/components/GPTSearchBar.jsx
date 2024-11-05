import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstatns";

const GPTSearchBar = () => {
	const langKey = useSelector((store) => store.config.language);
	return (
		<div>
			<form className="flex items-center justify-center w-full gap-2 bg-gray-800 h-96">
				<input
					className="p-3 text-gray-200 placeholder-gray-500 transition duration-200 w-96 bg-slate-900 focus:outline-none focus:ring-1 focus:ring-red-400 focus:bg-slate-800"
					type="text"
					placeholder={lang[langKey].gptSearchPlaceholder}
				/>
				<button className="px-6 py-2 text-lg font-semibold text-white transition duration-200 transform bg-red-500 shadow-md hover:bg-red-600 hover:scale-105">
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
