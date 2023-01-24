import React,{useEffect} from 'react'
import {GoogleButton} from "react-google-button"
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Signin = () => {
  const {googleSignInPopUp,googleSignInRedirect,user} = UserAuth();
  const navigate =useNavigate();

  const handleGoogleSignIn= async() => {
    try {
      await googleSignInPopUp();
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    if(user !== null){
      navigate('/account');
    }
  },[user])

  return (
    <div>
        <h1>Sign in Page</h1>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  )
}

export default Signin