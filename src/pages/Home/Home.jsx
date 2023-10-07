import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Home/Home.css'
import { searchMovie } from "../../apis/omdb";

function Home () {

    const [MovieList, setMovieList] = useState([]);

    

    async function downloadDefaultMovies (...args) {
        const urls = args.map((name) => searchMovie(name))
        const response = await axios.all((urls.map(url => axios.get(url))))
        const movies = response.map((movieResponse) => movieResponse.data.Search)
        setMovieList([].concat(...movies))
    }



    useEffect(() => {
        downloadDefaultMovies("harry", "batman", "avengers", "superman")
    }, [])
    return (
        <>
            {/* NavBar */}
            {/* MovieList */}
            {/* pagination button */}
            
            <div className="movie-card-parent">
           
                {MovieList.length > 0 && MovieList.map((movie) => 
                    <MovieCard  key={movie.omdbId} Title={movie.Title} Year={movie.Year} Poster={movie.Poster}/>
                )}
                
            </div>
            
        </>
    )
}

export default Home;