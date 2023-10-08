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
        setMovie(response.data)
    }

    useEffect(() => {
        downloadMovie()
    }, [id])
    return (
        <>
            

            {movie && 
                <div className="single-movie-wrapper">
                    <div>
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="right-side-details">
                        <h3>{movie.Title}</h3>
                        <h4><span>Released in:-</span> <span className="right-color">{movie.Released}</span></h4>
                        <h4><span>Duration:-</span> <span className="right-color">{movie.Runtime}</span></h4>
                        <h4><span>Languages:-</span> <span className="right-color">{movie.Language}</span></h4>
                        <h4><span>Country:-</span> <span className="right-color">{movie.Country}</span></h4>
                        <h4><span>Genre:-</span> <span className="right-color">{movie.Genre}</span></h4>
                        <h4><span>Actors:-</span> <span className="right-color">{movie.Actors}</span></h4>
                        <h4><span>Description:-</span> <span className="right-color">{movie.Plot.substr(0, 40)}...</span></h4>

                    </div>
                </div>
            }
        </>
    )
}
export default MovieDetails;