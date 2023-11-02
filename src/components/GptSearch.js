import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10  '>
        <img 
          src= {BG_URL}
          className='blur-md h-screen object-cover md:w-screen'
          alt='backgroundImage' 
        />
      </div>
      <div >
          <GptSearchBar />
          <GptMoviesSuggestions />
      </div>
   
    </>
  )
}

export default GptSearch