import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
   const {user,logOut}=UserAuth();

    const handleLogOut=async()=>{
      await logOut();
    }

  return (
    <div>
         <h2>Account ,{user?.displayName}</h2>
         <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default Account