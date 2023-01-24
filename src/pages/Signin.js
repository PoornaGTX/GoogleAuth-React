import React from 'react'
import {GoogleButton} from "react-google-button"
import { UserAuth } from '../context/AuthContext'

const Signin = () => {

  const {googleSignIn} = UserAuth();

  const handleGoogleSignIn=async()=>{

    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <div>
        <h1>Sign in Page</h1>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  )
}

export default Signin