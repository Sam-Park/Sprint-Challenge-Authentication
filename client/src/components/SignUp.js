import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Input, InputGroup, Button, Form, Col } from 'reactstrap';
import NavBar from './NavBar';

class SignUp extends Component {
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
        axios.post('http://localhost:5000/api/users', {
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
            console.log("res", res.status);
            if (res.status === 201) {
                localStorage.setItem("Authorization", res.data.token)
                this.setState({ redirect: true })
            }
            console.log('Registration Successful', res);
        })
        .catch(err => {
            console.log("error", err);
        });
        this.setState({ username: "", password: "" }) 
    };

    render() { 
        const redirect = this.state.redirect;
        if (redirect) {
           return <Redirect to="/regsuccess" />
        }
        return ( 
            <div>
                <NavBar />
                <h1 style={{ marginBottom: "25px", textDecoration: "underline" }}> Sign Up </h1>
                <Form onSubmit={this.logInUser}>
                    <InputGroup
                    style={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center"
                      }}>
                    <Button color="primary" type="submit">Submit</Button>
                <Col sm="3">
                    <Input
                     placeholder="username"
                     type="text"
                     onChange={this.handleUserName}
                     value={this.state.username}>
                    </Input>
                    </Col>
                    <Col sm="3">
                    <Input
                     placeholder="password"
                     type="password"
                     onChange={this.handleUserPass}
                     value={this.state.password}>
                    </Input>
                    </Col>
                    </InputGroup>
                    </Form>

                </div>
         )
    }
}
 
export default SignUp;