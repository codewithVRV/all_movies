
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

function MainRouting () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movie/:name' element={<MovieDetails />}/>
            </Routes>
        </>
    )
}

export default MainRouting;