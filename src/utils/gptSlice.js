import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showSearchGPT: false,
		geminiResults: null,
		tmdbResults: null,
	},
	reducers: {
		toggleSearchGPTView: (state) => {
			state.showSearchGPT = !state.showSearchGPT;
		},
		addMovieResults: (state, action) => {
			const { geminiResults, tmdbResults } = action.payload;
			state.geminiResults = geminiResults;
			state.tmdbResults = tmdbResults;
		},
	},
});

export const { toggleSearchGPTView, addMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
