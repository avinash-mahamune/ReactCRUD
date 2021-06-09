import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

     class Login extends Component{

        // https://www.youtube.com/watch?v=fWXk2YC8gXI

    constructor(props) {
        super(props);

        let loggedIn = false;        
        this.state = {
            username: '',
            password: '',
            loggedIn
        }

        this.onChange = this.onChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);

        
    }


    submitLogin(e) {
        e.preventDefault();
        const {username, password } = this.state;

        // login logic 
        if(username === 'admin' && password === "123"){
            localStorage.setItem("token", "zjkdksjahjksadf");
            this.setState({
                loggedIn : true
            })
        }

    }

    onChange(e) {
        console.log("Event",e);
         
        this.setState({
            [e.target.name] : e.target.value           
        })
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to = "/admin"/>
        }
        return(
            <div>
                <h1>Login</h1>

                    <form onSubmit={this.submitLogin}>
                        <input type="text" placeholder="username" name="username" value = {this.state.username} onChange={this.onChange}  />
                        <br/>

                        <input type="password" placeholder="password" name="password" value = {this.state.password} onChange={this.onChange}  />
                        <br/>

                        <input type="submit" />
                        <br/>
                        
                    </form>
            </div>
        )
    }
} 


export default Login;