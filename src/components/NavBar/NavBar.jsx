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