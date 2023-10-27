import React from 'react'
import  {FaPlay}  from 'react-icons/fa6'
import {TfiInfoAlt} from "react-icons/tfi"

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black to-20%'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className='  flex items-center  '>
            <button className='bg-white p-2 px-10 text-lg text-black   rounded-md hover:opacity-70 transition-all '> 
                <div className='flex justify-between items-center '><FaPlay className='mx-2' />  Play</div>
            </button>
            <button className='mx-2 bg-gray-600  p-2 px-10 text-lg bg-opacity-40 text-white rounded-md'>
                <div className='flex justify-between items-center '> <TfiInfoAlt className='mx-2' /> More Info</div>
            </button>
        </div>
    </div>
  )
}

export default VideoTitle