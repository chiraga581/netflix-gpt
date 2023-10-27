import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
        <Header />
        {/* 
          Main Container 
            - VideoBackground
            - Video title
          Secondary Container 
            - Movie list in rows 
            - Cards X N     
       */}
        <MainContainer />
        <SecondaryContainer />
        
    </div>
  )
}

export default Browse