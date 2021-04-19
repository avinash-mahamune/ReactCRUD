import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './card'

import './ecommerece.scss'

const Dashboard = () => {

  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers(); 
  },[]);

 const loadUsers = async() => {
     const result = await axios.get('http://localhost:3003/users');   
     console.log('Dashboard RESULT-->',result);     
     setUsers(result.data);
     console.log('Dashboard All Users-->',users);
 }




    return (
        <div className="container-fluid">          
          <div className="all-card">        

          {
            users.map((user, index) => (
              <Card Users={user} />
            ) )
          }
          
          
          
          
          </div>
        </div>

    )
}


export default Dashboard;