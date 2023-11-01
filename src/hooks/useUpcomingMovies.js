import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=> {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)
    const getUpcomingMovies = async () => {
        const data = await fetch ("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(()=> {
       !upcomingMovies &&  getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;