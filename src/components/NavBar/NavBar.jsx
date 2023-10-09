import { useContext, useState } from 'react';
import './NavBar.css'
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

function NavBar () {

    // const [lightMode, setLigthMode] = useState(false)
    const [isAutoCompleteVisible, setAutoCompleteVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [MovieList] = useMovieList(searchTerm)
    const navigator = useNavigate()

    const {theme, setTheme} = useContext(ThemeContext)
    
    async function handleAutoClicked (id) {
        navigator(`movie/${id}`)
    }

    function updateTheme () {
        if(theme == 'dark'){
            setTheme('light');
            localStorage.setItem('app-theme', 'light')
        }
        else{
            setTheme('dark');
            localStorage.setItem('app-theme', 'dark')
        }
    }
    return (
        <>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary  parent">
                <div className="container">
                    <Link to={'/'} className="navbar-brand"  id='movie-title'>Movie Hub</Link>
                   
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
                        
                        <div onClick={() => setTheme(updateTheme)}>

                            {(theme === 'dark') ?  <i className="bi bi-moon-fill theme-icon" ></i>  : <i className="bi bi-sun-fill theme-icon" ></i> }

                        </div>
                        <div className='result-list-parent' style={{display: (isAutoCompleteVisible) ? "block": "none"}}>
                            {MovieList.length > 0 && MovieList.map((movie) => <p onMouseDown={() => handleAutoClicked(movie.imdbID)} key={movie.imdbID}> {movie.Title}</p>)}
                                
                        </div>
                    </form>
                    </div>
                </div>
            </nav> */}

            <div className="nav-wrapper">
                
                <Link to={'/'} className="navbar-brand movie-title" >Movie Hub</Link>

                <div className="search-bar-two">
                    <input type="text" placeholder='Search Here'
                        onFocus={() => {
                            setAutoCompleteVisible(true)
                        }}
                        onBlur={() => {
                            console.log()
                            setAutoCompleteVisible(false)
                        }}
                        onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                    />
                    <div className='result-list-parent' style={{display: (isAutoCompleteVisible) ? "block": "none"}}>
                        {MovieList.length > 0 && MovieList.map((movie) => <p onMouseDown={() => handleAutoClicked(movie.imdbID)} key={movie.imdbID}> {movie.Title}</p>)}
                            <p>Hello vishnu</p>
                            <p>Hello vishnu</p>
                            <p>Hello vishnu</p>
                    </div>
                </div>

                <div onClick={() => setTheme(updateTheme)}>

                    {(theme === 'dark') ?  <i className="bi bi-moon-fill theme-icon" ></i>  : <i className="bi bi-sun-fill theme-icon" ></i> }

                </div>

                

            </div>





        </>
        
    )
}

export default NavBar;