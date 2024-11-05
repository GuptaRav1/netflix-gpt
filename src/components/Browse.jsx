import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import SearchGPT from "./SearchGPT";

const Browse = () => {
	const showSearchGPT = useSelector((store) => store.gpt.showSearchGPT);

	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();

	return (
		<div>
			<Header />
			{showSearchGPT ? (
				<SearchGPT />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
					<Footer />
				</>
			)}
		</div>
	);
};

export default Browse;
