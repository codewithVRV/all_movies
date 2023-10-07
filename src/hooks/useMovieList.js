import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

function useMovieList (...args) {
    const [MovieList, setMovieList] = useState([]);

    

    async function downloadDefaultMovies (...args) {
        const urls = args.map((name) => searchMovie(name))
        const response = await axios.all((urls.map(url => axios.get(url))))
        const movies = response.map((movieResponse) => movieResponse.data.Search)
        setMovieList([].concat(...movies))
    }



    useEffect(() => {
        downloadDefaultMovies(...args)
    }, [])

    return [MovieList]
}

export default useMovieList;