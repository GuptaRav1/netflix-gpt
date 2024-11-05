import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showSearchGPT: false
    },
    reducers: {
        toggleSearchGPTView: (state) => {
            state.showSearchGPT = !state.showSearchGPT
        }
    },
})

export const { toggleSearchGPTView } = gptSlice.actions

export default gptSlice.reducer