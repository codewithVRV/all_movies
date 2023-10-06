import './MovieCard.css'

function MovieCard ({Title, Year,}) {
    return (
            <>

            <div className="movie-card">
                <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="" />
                <span>{Title}:-</span>
                <span>{Year}</span>
            </div>
            </>        
    )
}

export default MovieCard;