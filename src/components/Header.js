import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        navigate("/error");
    });
  }
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const {uid , email , displayName, photoURL} = user;
        dispatch(
          addUser(
            {
              uid:uid , 
              email:email , 
              displayName: displayName ,
              photoURL:photoURL
            }
          )
        );
        navigate("/browse");
        
      } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/") 
      }
    });
  },[])

  const handleGptSearchClick = () => {
      // toggle gpt search
      dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value))
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row md:justify-between '>
        <img 
            className='w-44 mx-auto md:mx-0'
            src= {LOGO}
            alt='Logo'
        />

        {
          
          user && 
            <div className='flex flex-row justify-between p-2 mx-auto md:mx-0 '>
              {showGptSearch && <select className='p-2 text-white bg-inherit' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map(lang => <option className='bg-black' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
                
              </select>}
              <button className='py-2 px-4 mx-4 my-2 rounded-lg  text-white bg-gradient-to-br from-purple-800 to-red-700'
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Homepage":"GPT Search"}
              </button>
              <img
                className='w-12 h-12 hidden md:block'
                alt='user-image'
                src={user?.photoURL}
              />
              <button onClick={handleSignOut} className='py-2 px-4 mx-4 my-2 rounded-lg  text-white bg-red-700  '>Sign Out</button>
            </div>
        }
    </div>
  )
}

export default Header