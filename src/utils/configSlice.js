import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        theme: "light",
        language: "en",
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
})

export const { toggleTheme, setLanguage } = configSlice.actions;

export default configSlice.reducer;