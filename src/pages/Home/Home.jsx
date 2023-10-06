import axios from "axios";
import { useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import '../Home/Home.css'

function Home () {

    const movie = {
        Title :"The Avengers favourite movie",
        Year : 2025,
        imdbId: 23,
        Type: 'movie',
        Poster:	"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" 
    }

    async function downloadMovies() {
        const response = await axios.get('http://www.omdbapi.com/?s=avengers&apikey=b14d10e5', {
            headers: {
                apikey : import.meta.env.VITE_APP_ID,
            }
        })
        console.log("response of movie is", response)
    }



    useEffect(() => {
        downloadMovies()
    })
    return (
        <>
            <h5>This is Home Page</h5>
            {/* NavBar */}
            {/* MovieList */}
            {/* pagination button */}
            <div className="movie-card-parent">
            <MovieCard 
                {...movie}
                />
            
            </div>
            
        </>
    )
}

export default Home;