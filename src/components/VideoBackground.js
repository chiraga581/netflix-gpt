import React from 'react'

import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';


// fetching the trailer video and updating the store with trailer video data

const VideoBackground = ({movieId}) => {
    
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <div className='w-screen'>
            <iframe  
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&modestbranding=0&loop=1&autoplay=1&mute=1&controls=0&rel=0" } 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >

                </iframe>
        </div>
    )
}

export default VideoBackground





