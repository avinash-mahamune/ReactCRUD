import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'

const Card = (props) => {
    console.log("props",props);


    
    return (
        <div className="card-wrapper">
            <div className="am-header">
                <h1>{props.Users.name}</h1>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                        {/* <img src="../../assets/images/more.svg"  alt="" /> */}
                        <img src="./../../assets/images/more.svg" alt="" />

                    </button>
                    <ul className="dropdown-menu">

                    <Link className="" to={`/users/edit/${props.Users.id}`}> 
                        <li><a href="#"><i className="fal fa-pen"></i>Edit</a></li>
                    </Link>
                       
                        <li><a href="#">Duplicate</a></li>
                        <li><a href="#">Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className="am-card-body">
                <h1>{props.Users.email}</h1>
                <p>{props.Users.phone}</p>               
            </div>
            <div className="am-footer">
                <div className='footer-left'>
                    <div className="footer-instance">
                        <a href="">{props.Users.id}</a>
                    </div>
                    <p>{props.Users.username}</p>
                    <div className="custom-tooltip instance-tooltip">

                        <header>
                            <h2>Success Plays (12)</h2>
                            <a href="#">View All</a>
                        </header>
                        <ul>
                            <li>
                                <p className="instance-name">Renewal Account Instance 01</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 02</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 03</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 04</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 05</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 06</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 07</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 08</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 09</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 10</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 11</p>
                            </li>
                            <li>
                                <p className="instance-name">Renewal Account Instance 12</p>
                            </li>


                        </ul>
                    
                    </div>
                </div>

                <div className='footer-right'>
                    <div className="footer-badge">
                    {props.Users.website}
                    </div>

                </div>

            </div>
        </div>



    )
}


export default Card;