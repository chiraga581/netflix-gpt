import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector(store => store.user)
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
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img 
            className='w-44'
            src= {LOGO}
            alt='Logo'
        />

        {user && <div className='flex flex-row p-2'>
          <img 
            className='w-12 h-12'
            alt='user-image'
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white px-2 '>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header