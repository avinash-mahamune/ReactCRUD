import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link} from 'react-router-dom'


const ViewUser = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { id } = useParams();

    const loadUser = async () => {
              const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data);
        setUser(result.data);

    };

    useEffect(() => {       
        loadUser();
    }, []);



    return (
        <div className="container">          
            <Link className='btn btn-primary mt-3' to='/'>Back to Home</Link>            
             <Link className="btn btn-outline-primary mx-3" to={`/users/edit/${user.id}`}>Edit</Link>
             <hr />
            <h2>User Id: {user.id}</h2>
          
            <ul class="list-group">
                <li className="list-group-item">{ user.name }</li>
                <li className="list-group-item">{ user.username }</li>
                <li className="list-group-item">{ user.email }</li>
                <li className="list-group-item">{ user.phone }</li>
                <li className="list-group-item">{ user.website }</li>
            </ul>
        </div>

    )
}


export default ViewUser;