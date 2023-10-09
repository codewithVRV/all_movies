import MovieCard from "../../components/MovieCard/MovieCard";
import useMovieList from "../../hooks/useMovieList";
import '../Home/Home.css'

function Home () {

    const [MovieList] = useMovieList( "batman", "harry", "avengers", "superman")


    return (
        <>
           
            
            <div className="movie-card-parent">
           
                {MovieList.length > 0 && MovieList.map((movie) => 
                    
                    <MovieCard      
                        key={movie.imdbID} 
                        id={movie.imdbID}
                        Poster={movie.Poster}
                    />
                    
                )}
                
            </div>
            
        </>
    )
}

export default Home;