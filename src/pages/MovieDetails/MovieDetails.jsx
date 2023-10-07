import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {searchMovieById} from '../../apis/omdb'
import './MovieDetails.css'

function MovieDetails () {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    async function downloadMovie() {
        const response = await axios.get(searchMovieById(id))
        console.log("response of movie is", response)
        setMovie(response.data)
    }

    useEffect(() => {
        downloadMovie()
    }, [])
    return (
        <>
            {/* {movie && <MovieCard 
                key={movie}
                Title={movie.Title}
                Poster={movie.Poster}
            />} */}

            {movie && 
                <div className="single-movie-wrapper">
                    <div>
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="right-side-details">
                        <h3>{movie.Title}</h3>
                        <h4><span>Released in:-</span> {movie.Released}</h4>
                        <h4><span>Duration:-</span> {movie.Runtime}</h4>
                        <h4><span>Languages:-</span> {movie.Language}</h4>
                        <h4><span>Country:-</span> {movie.Country}</h4>
                        <h4><span>Genre:-</span> {movie.Genre}</h4>
                        <h4><span>Actors:-</span> {movie.Actors}</h4>
                        <h4><span>Description:-</span> {movie.Plot.substr(0, 40)}...</h4>

                    </div>
                </div>
            }
        </>
    )
}
export default MovieDetails;