import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
        // An error happened.
        navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img 
            className='w-44'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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