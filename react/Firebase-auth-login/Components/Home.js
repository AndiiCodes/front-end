import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const [user, loading, error] = useAuthState(auth);
  
  console.log(error);

  const navigate = useNavigate();

  const handleLogout=()=>{
    auth.signOut().then(()=>{
      console.log('successfully logged out');
      navigate('/');
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='box'>
      {loading?(
        <div>Loading...</div>
      ):(
        <>
          {user?(
            <>
              <button className='btn btn-secondary btn-md'
                onClick={handleLogout}>
                LOGOUT
              </button>
              <h3>Welcome {user.displayName}</h3>
              <p>{user.email}</p>
              <div className='photo'>
                <img src={user.photoURL} alt="dp" referrerPolicy='no-referrer'/>
              </div>
            </>
          ):(
            <button className='btn btn-primary btn-md'
              onClick={()=>navigate('/login')}>
              LOGIN
            </button>
          )}
        </>
      )}
    </div>
  )
}
