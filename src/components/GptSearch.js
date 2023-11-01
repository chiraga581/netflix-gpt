import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>

        <div className='fixed -z-10 w-screen '>
          <img 
              src= {BG_URL}
              className='blur-md'
              alt='backgroundImage' 
              />
        </div>

        <GptSearchBar />
        <GptMoviesSuggestions />
    </div>
  )
}

export default GptSearch