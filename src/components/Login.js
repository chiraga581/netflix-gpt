import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {

  //  Toggle sign in and sign up 
  const [isSignInForm , setIsSignInForm] = useState(true);
  // for updating error message 
  const [errorMessage , setErrorMessage] = useState(null)


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }


  // Validating email and password

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleButtonClick = () => {
    //  validate the form data 
    console.log(email.current.value)
    console.log(password.current.value)
    
    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message)

    //  sign in / sign up

  }



  return (
    <div>
        <Header />
        <div className='absolute'>
          <img 
              src='https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg'
              alt='backgroundImage' 
              />
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'
        >
          
          <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
          
          {!isSignInForm && <input

            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full  bg-neutral-700 rounded-lg '
          />}

          <input 
            ref={email}
            type='text'
            placeholder='Email Address or Phone Number  '
            className='p-4 my-4 w-full bg-neutral-700 rounded-lg'
          />
          

          <input
            ref={password}
            type='password'
            placeholder='Password'
            className='p-4 my-4 w-full  bg-neutral-700 rounded-lg '
          />

          <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>

          <button
            className='p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up now" : "Already registerd ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login