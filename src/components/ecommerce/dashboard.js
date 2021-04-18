import React, { useState, useEffect } from "react";
import Card from './card'

import './ecommerece.scss'

const Dashboard = () => {

  
    useEffect(() => {       
       
    }, []);



    return (
        <div className="container-fluid">          
          <div className="all-card">
          <Card />
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
          </div>
        </div>

    )
}


export default Dashboard;