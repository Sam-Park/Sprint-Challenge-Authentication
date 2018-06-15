import React, { Component } from 'react';
import axios from 'axios';
import { Input, InputGroup, Button, Form } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
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
            if (res.status === 200) {
                localStorage.setItem("Authorization", res.data.token)
            }
            console.log('Registration Successful', res);
        })
        .catch(err => {
            console.log("error", err);
        });
        this.setState({ username: "", password: "" }) 
    };

    render() { 
        return ( 
            <div>
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
 
export default SignUp;