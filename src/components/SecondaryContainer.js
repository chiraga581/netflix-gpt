import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  console.log(movies)
  return (
    movies.nowPlayingMovies && (
      <div className='bg-black w-screen  '>
        <div className='-mt-52 pl-12 relative z-28'>
          <MovieList title={"Now Playing"} movies ={movies.nowPlayingMovies}/>
          <MovieList title={"Trending Movies"} movies ={movies.nowPlayingMovies}/>
          <MovieList title={"Popuulas Movies"} movies ={movies.popularMovies}/>
          <MovieList title={"Upcoming Movies"} movies ={movies.nowPlayingMovies}/>
        </div>
      </div>
    )
  )
}

export default SecondaryContainer