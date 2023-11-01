import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMoviesSuggestions = () => {

  const gpt = useSelector((store) => store.gpt)

  const {movieResults , movieNames} = gpt;

  if(movieNames === null){
    return null;
  }
  return (
    <div className='p-4 m-4 text-white'>
        <div>
          {
            movieNames.map((movieName , index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)
          }
        </div>
    </div>
  )
}

export default GptMoviesSuggestions