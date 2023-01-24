import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const NavBar = () => {

  const {user,logOut}=UserAuth();

  const handleLogOut=async()=>{
    await logOut();
  }


  return (
    <div style={{background:'yellow',alignItems:'flex-end',textAlign:"right"}}>
        {user?.displayName? <button onClick={handleLogOut} style={{marginRight:50,fontSize:30}}>log Out</button>: <Link to="/signin" style={{marginRight:50,fontSize:30}}>Sign in</Link>}
    </div>
  )
}

export default NavBar