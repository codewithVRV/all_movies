import { useState } from 'react';
import './NavBar.css'
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { searchMovieById } from '../../apis/omdb';

function NavBar () {

    const [lightMode, setLigthMode] = useState(false)
    const [isAutoCompleteVisible, setAutoCompleteVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [MovieList] = useMovieList(searchTerm)
    
    async function handleAutoClicked (movieId) {
        const response  = await searchMovieById(movieId)
        console.log("response of a movie is", response)
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary  parent">
                <div className="container">
                    <a className="navbar-brand" href="#" id='movie-title'>Movie Hub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    
                    <form className="d-flex" role="search" id='form-parent'>
                        <input className="form-control me-2 search-bar" 
                            type="search" id='input-search-bar' placeholder="Search" 
                            onFocus={() => {
                                setAutoCompleteVisible(true)
                            }}
                            onBlur={() => {
                                console.log()
                                setAutoCompleteVisible(false)
                            }}
                            onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                        aria-label="Search"/>
                        {(lightMode) ? 
                        <i className="bi bi-moon-fill theme-icon" onClick={() => setLigthMode(!lightMode)}></i> 
                         :
                        <i className="bi bi-sun-fill theme-icon" onClick={() => setLigthMode(!lightMode)}></i> }

                        <div className='result-list-parent' style={{display: (isAutoCompleteVisible) ? "block": "none"}}>
                            {MovieList.length > 0 && MovieList.map((movie) => <p onMouseDown={() => handleAutoClicked(movie.imdbID)} key={movie.imdbID}>{movie.Title}</p>)}
                                
                        </div>
                    </form>
                    </div>
                </div>
            </nav>



        </>
        
    )
}

export default NavBar;