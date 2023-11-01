import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_URL, USER_AVATAR} from "../utils/constants"

const Login = () => {

  //  Toggle sign in and sign up 
  const [isSignInForm , setIsSignInForm] = useState(true);
  // for updating error message 
  const [errorMessage , setErrorMessage] = useState(null)

  const dispatch = useDispatch();


  // retrieving data from the form 
  const email = useRef(null)
  const password = useRef(null) 
  const name = useRef(null)

  //  toggle switch for changing form inplace
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  // Validating email and password
  const handleButtonClick = () => {
    //  validate the form data

    const message = checkValidateData(email.current.value,password.current.value);
    setErrorMessage(message)

    // check if it is valid or not 

    if(message){
      return ;
    }

    //  sign in / sign up Logic
    if(!isSignInForm){
      // sign up logic



      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
              displayName: name.current.value , 
              photoURL: USER_AVATAR
            })
              .then(() => {
                const {uid, email, displayName , photoURL} = auth.currentUser;
                dispatch(
                  addUser({
                    uid : uid,
                    displayName: displayName,
                    email: email,
                    photoURL :photoURL,
                  })
                )
              }).catch((error) => {
                setErrorMessage(error.message)
              });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode  + errorMessage)
          setIsSignInForm(!isSignInForm ) 
          
        });

    }
    else{
      // sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage)
        setIsSignInForm(!isSignInForm ) 
      });
    }

  } 

  return (
    <div >
        <Header />
        <div className='absolute w-screen'>
          <img 
              src={BG_URL}
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