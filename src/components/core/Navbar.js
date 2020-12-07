import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink className="navbar-brand" to="/">React Users</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Contact">CONTACT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/About">ABOUT</NavLink>
                        </li>
                       
                    </ul>
                    <Link className="btn btn-light" to="/users/add">ADD USER</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar