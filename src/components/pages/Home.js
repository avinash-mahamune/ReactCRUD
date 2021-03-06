

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'



const Home = () => {

    const [users, setUser] = useState([]);  // empty State array created  
     
    // run when component load
    useEffect(() => {
        console.log('Use Effect...');
        loadUsers();
    }, []);

    // Get Data API call 
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        console.log("get data...", result);
        setUser(result.data.reverse());
    }

    // Delete user API call 
    const deleteUser = async (id) =>{
        console.log(id);

        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <div className="container-fluid">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>                                   
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={ `/users/viewuser/${user.id}`} >View</Link>
                                        <Link className="btn btn-outline-primary mx-3" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
}

export default Home;