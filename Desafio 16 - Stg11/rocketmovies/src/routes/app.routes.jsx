import { Routes, Route } from 'react-router-dom'
import { NewMovie } from '../pages/NewMovie'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new_movie' element={<NewMovie/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/movie_preview/:id' element={<MoviePreview/>}/>
        </Routes>
    )
}