import React from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store) =>  store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center '>

        <form className='w-1/2 k grid grid-cols-12 hover:backdrop:blur-sm '>
            <input 
                type='text'
                className='p-4 m-4 col-span-9 bg-black rounded-3xl '
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className='py-2 px-4 bg-red-700 col-span-3 m-4 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>

    </div>
  )
}

export default GptSearchBar