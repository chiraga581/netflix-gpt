import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath, name}) => {
  if(!posterPath) return null
  return (
    <div className='w-48 pr-4 flex flex-col justify-start items-start '>
        <img 
            className='hover:cursor-pointer'
            alt='Movie card'
            src={IMG_CDN_URL + posterPath }
        />
        <div className='text-white'>
            {name}
        </div>
    </div>
  )
}

export default MovieCard