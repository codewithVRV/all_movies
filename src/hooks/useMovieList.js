import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";
import axios from "axios";

function useMovieList (...args) {
    const [MovieList, setMovieList] = useState([]);

    

    async function downloadDefaultMovies (...args) {
        try{
            const urls = args.map((name) => searchMovie(name))
            const response = await axios.all((urls.map(url => axios.get(url))))
            if(response[0].data.Error) { // in response we have 4 elements in array
                setMovieList([])
            }
            else{
                const movies = response.map((movieResponse) => movieResponse.data.Search)
            setMovieList([].concat(...movies))
            }
        }
        catch (error) {
           console.log("Error hadle at useMovieList", error)
        }
        
        
    }



    useEffect(() => {
        downloadDefaultMovies(...args)
    }, [...args])

    return [MovieList]
}

export default useMovieList;