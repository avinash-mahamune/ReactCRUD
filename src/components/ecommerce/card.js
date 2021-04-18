import React, { useState, useEffect } from "react";

const Card = () => {





    return (
        <div className="card-wrapper">
            <div className="am-header">
                <h1>Product Name</h1>

                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">
                        {/* <img src="../../assets/images/more.svg"  alt="" /> */}
                        <img src="./../../assets/images/more.svg" alt="" />

                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#">
                            <i class="fal fa-pen"></i>
                            Edit</a></li>
                        <li><a href="#">Duplicate</a></li>
                        <li><a href="#">Delete</a></li>
                    </ul>
                </div>
            </div>
            <div className="am-card-body">
                <h1>Get Well Accounts</h1>
                <p>Default Success Play for all accounts the need to get well in terms of their Health Score</p>
            </div>
            <div className="am-footer">
                <div className='footer-left'>
                    <div className="footer-instance">
                        <a href="">12</a>
                    </div>
                    <p>Instances</p>


                    <div className="custom-tooltip instance-tooltip">
                        <header>
                            <h2>Success Plays (12)</h2>
                            <a href="#">View All</a>
                        </header>
                        <ul>
                            <li>
                                <p class="instance-name">Renewal Account Instance 01</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 02</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 03</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 04</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 05</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 06</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 07</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 08</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 09</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 10</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 11</p>
                            </li>
                            <li>
                                <p class="instance-name">Renewal Account Instance 12</p>
                            </li>


                        </ul>
                    </div>



                </div>

                <div className='footer-right'>
                    <div className="footer-badge">
                        Churn
                    </div>

                </div>

            </div>
        </div>

    )
}


export default Card;