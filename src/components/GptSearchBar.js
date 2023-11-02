import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) =>  store.config.lang);
    const searchText = useRef(null)

    // search for movies in tmdb using search api

    const searchMovieTmdb = async (movieName)=> {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1'
            ,API_OPTIONS
        )
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {

        // make a call to API and get results 
        
        const gptQuery = "Act as a Movie Recommendation system and suggest some  movies for the query :" 
            + searchText.current.value 
            +". Only give me Names of (five)5 movies, comma seperated like the example results given ahead. Example Result: Gadar,Andaz,Angoor,Hungama,Golmaal."

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
        });
        if(!gptResults.choices){
            // error handling TODO
        }
        console.log(gptResults.choices?.[0]?.message?.content )

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');
        console.log(gptMovies)

        // for each movie tmdb api will be searched
        const promiseArray = gptMovies.map((movie)=>searchMovieTmdb(movie) )
        
        // five promise arrays

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults)

        dispatch(addGptMovieResult({movieNames : gptMovies , movieResults : tmdbResults}));
    }
  return (
    <div className=' pt-[35%] md:pt-[10%] flex justify-center '>

        <form className='w-full md:w-1/2 k grid grid-cols-12 hover:backdrop:blur-sm ' onSubmit={(e) => e.preventDefault()}>
            <input 
                ref={searchText}
                type='text'
                className='p-4 m-4 col-span-9 bg-black rounded-3xl text-white '
                placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button 
                className='py-2 px-4 bg-red-700 col-span-3 m-4 text-white rounded-lg'
                onClick={handleGptSearchClick}
            >
                {lang[langKey].search}
            </button>
        </form>

    </div>
  )
}

export default GptSearchBar