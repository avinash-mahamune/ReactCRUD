import React, { useState } from "react";
import { Link } from 'react-router-dom'


const Logout = () => {

  
    return (
        <div className="">          
          <h1>You have been Logged Out !!!</h1>
          <Link to='/login'>Login</Link>
        </div>

    )
}


export default Logout;