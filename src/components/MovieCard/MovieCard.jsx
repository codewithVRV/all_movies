import './MovieCard.css'

function MovieCard ({Title, Year, Poster}) {
    return (
            <>

            <div className="movie-card">
                <img src={Poster} alt="" />
                <div className='card-title'>
                    <span id='movie-name'>{Title}</span>
                    <span id='movie-year'>Release In : {Year}</span>
                </div>
                
            </div>
            </>        
    )
}

export default MovieCard;