import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'; // Ensure this path is correct


const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
        }
    }
)

export default appStore