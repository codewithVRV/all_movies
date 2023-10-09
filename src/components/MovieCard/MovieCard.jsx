import { Link } from 'react-router-dom';
import './MovieCard.css'

function MovieCard ({ Poster, id}) {
    console.log("id is", id)
    return (
            <>
            <Link to={`movie/${id}`}>
            <div className="movie-card">
                <img src={Poster} alt="" />
                <div className='card-title'>
                </div>
                
            </div>
            </Link>
            </>        
    )
}

export default MovieCard;