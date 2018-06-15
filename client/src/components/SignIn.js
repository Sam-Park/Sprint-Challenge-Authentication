import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Input, InputGroup, Button, Form } from 'reactstrap';
import NavBar from './NavBar';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            redirect: false,
         }
    }

    handleUserName = e => {
        this.setState({ username: e.target.value })
    };

    handleUserPass = e => {
        this.setState({ password: e.target.value })
    };

    logInUser = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
            console.log("res", res.status);
            if (res.status === 201) {
                localStorage.setItem("Authorization", res.data.token)
                this.setState({ redirect: true })
            }
            console.log('login successful', res);
        })
        .catch(err => {
            console.log("error", err);
        });
        this.setState({ username: "", password: "" }) 
    };

    render() { 
        const redirect = this.state.redirect
        if (redirect) {
          return <Redirect to="/jokes" />
        }
        return ( 
            <div>
                <NavBar />
                <h1>Sign In</h1>
                <Form onSubmit={this.logInUser}>
                    <InputGroup>
                    <Button type="submit">Submit</Button>
                    <Input
                     placeholder="username"
                     type="text"
                     onChange={this.handleUserName}
                     value={this.state.username}>
                    </Input>
                    <Input
                     placeholder="password"
                     type="password"
                     onChange={this.handleUserPass}
                     value={this.state.password}>
                    </Input>
                    </InputGroup>
                    </Form>

                </div>
         )
    }
}
 
export default SignIn;