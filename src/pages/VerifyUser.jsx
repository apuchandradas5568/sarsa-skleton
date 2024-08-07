import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxios';

const VerifyUser = () => {
  const { userId, uniqueString } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const axios = useAxiosPublic()

  // useEffect(() => {
    const verifyUser = async () => {
      // try {
        await axios(`/users/verify/${userId}/${uniqueString}`)
        .then(response=>{
          console.log(response)
        })
        .catch(error=>{
          console.log(error);
        })
    //     if (response.data.success) {
    //       setMessage('Verification successful! Redirecting to login...');
    //       setTimeout(() => {
    //         navigate('/login');
    //       }, 3000);
    //     } else {
    //       setMessage('Verification failed. Please try again.');
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     setMessage('An error occurred during verification. Please try again later.');
    //   } finally {
    //     setIsLoading(false);
    //   }
    };
    // verifyUser();
  // }, [userId, uniqueString]);

  return (
    <div>
      <button onClick={verifyUser}>Click Me</button>
    </div>
    // <div className="verification-container">
    //   {isLoading ? (
    //     <p>Verifying your account...</p>
    //   ) : (
    //     <p className='text-black'>{message}</p>
    //   )}
    // </div>
=======
  const axios = useAxiosPublic();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/users/verify/${userId}/${uniqueString}`);
        if (response.data && response.data.success) {
          setMessage('Verification successful! Redirecting to login...');
            setTimeout(() => {
              navigate('/login');
            }, 5000);
        }else{
          setMessage('Verification failed. Please try again.');
        }
      }
      catch(error){
        setMessage('An error occurred during verification. Please try again later.');
      }
      finally{
        setIsLoading(false);
        console.log('Verification process finished.');
      }
    };
    verifyUser();
  }, []);

  return (
      <div className="verification-container">
        {isLoading ? (
          <p>Verifying your account...</p>
        ) : (
          <p className='text-black'>{message}</p>
        )}
      </div>
>>>>>>> origin/main
  );
};

export default VerifyUser;
