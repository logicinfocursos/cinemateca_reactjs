import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './pages/movies'
import Movie from './pages/movie'


export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Movies />}/>
            <Route  path="/movies" element={<Movies />}/>
            <Route  path="/:code" element={<Movie />}/>
        </Routes>
        </BrowserRouter>
    )
}