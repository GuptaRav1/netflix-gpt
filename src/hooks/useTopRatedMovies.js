import { API_OPTIONS } from '../utils/constatnts'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addTopRatedMovies } from '../utils/moviesSlice'


const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)

        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
    };

    useEffect(() => {
        getMovies()
    }, [])
}

export default useTopRatedMovies