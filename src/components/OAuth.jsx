import React from 'react';
import Google from "../images/search-1.png";
import "../pages/SignUp/SignUp.css";
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxios';

function OAuth() {
  const axios = useAxiosPublic();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);

      const response = await axios.post('/users/auth/google', {
        username: resultFromGoogle.user.displayName,
        email: resultFromGoogle.user.email
      }, {
        headers: {
          "Content-Type": 'application/json'
        }
      });

      const data = response.data;
      console.log(data);

    }
    catch(error){
        console.log(error);
    }
  }
  return (
    <button className="Google-button" onClick={handleGoogleClick}>
      <img src={Google} alt="Google" />
      Sign In With Google
    </button>
  );
}

export default OAuth;
