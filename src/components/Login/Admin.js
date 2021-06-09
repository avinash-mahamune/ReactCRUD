import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom'


const Admin = () => {

    let loggedIn = false;
    
    useEffect(() => {
        // checkToken();
    },[])

    const checkToken = () => {
      const token = localStorage.getItem("token");

            if(token != null){
                console.log("Token Yes")
                loggedIn = true
            }else{
                console.log("Token No")
                loggedIn = false
            }
    }

      

    return (          
        <div>
        {(() => {
          // if (loggedIn) {
            return(
                <div>
                    <h1>This is Admin Page only Auth People can see this </h1>
                    <Link to='/logout'>Logout</Link>
                </div>
            )
          // } else {
            // return <Redirect to ="/" />;
          // }
        })()}
      </div>



    )
}  


export default Admin;