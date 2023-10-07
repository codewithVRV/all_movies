import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Home/Home.css'
import { searchMovie } from "../../apis/omdb";

function Home () {

    const [movies, setMovies] = useState([]);

    

    async function downloadDefaultMovies (movieName) {
        const response = await axios.get(searchMovie(movieName))
        setMovies([...response.data.Search])
    }



    useEffect(() => {
        downloadDefaultMovies("harry")
    }, [])
    return (
        <>
            {/* NavBar */}
            {/* MovieList */}
            {/* pagination button */}
            
            <div className="movie-card-parent">
           
            {movies.map((movie) => 
                <MovieCard  key={movie.omdbId} Title={movie.Title} Year={movie.Year} Poster={movie.Poster}/>
            )}
            </div>
            
        </>
    )
}

export default Home;