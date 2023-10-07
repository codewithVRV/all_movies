import { useRef, useState } from 'react';
import './NavBar.css'

function NavBar () {

    const [lightMode, setLigthMode] = useState(false)
    const resultRef = useRef(null)

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
                            resultRef.current.style.display = "block"
                        }}
                        onBlur={() => {
                            resultRef.current.style.display = "none"
                        }}
                        aria-label="Search"/>
                        {(lightMode) ? 
                        <i className="bi bi-moon-fill theme-icon" onClick={() => setLigthMode(!lightMode)}></i> 
                         :
                        <i className="bi bi-sun-fill theme-icon" onClick={() => setLigthMode(!lightMode)}></i> }
                        <div className='result-list-parent' ref={resultRef}>
                                <p>Result 1</p>
                                <p>Result 1</p>
                                <p>Result 1</p>
                                <p>Result 1</p>
                        </div>
                    </form>
                    </div>
                </div>
            </nav>



        </>
        
    )
}

export default NavBar;