import React, { Component } from 'react';
import axios from 'axios';
import { Card,  CardColumns, Container, CardTitle } from "reactstrap";

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jokes: []
         };
    }

    getSession = () => {
        const config = {
                    headers: {
                        "Authorization": localStorage.Authorization
                    }
        }
        axios
            .get('http://localhost:5000/api/jokes', config)
            .then(res => {
                console.log("res", res.data)
                this.setState({ jokes: res.data });
            })
            .catch(err => {
                console.log("error", err)
            })
    }
    componentDidMount() {
        this.getSession()
    }

    render() { 
        return (  
            <div>
                <Container>
                    <CardColumns>
                       {this.state.jokes.map(joke => {
                          return (
                          <Card key={joke.id}>
                              <CardTitle>
                               {joke.setup}
                                </CardTitle>
                                <br />
                               {joke.punchline}
                               <span />
                               <br />
                               </Card>
                        )})}
                       
                        </CardColumns>
                    </Container>
             </div>
        )
    }
}
 
export default Jokes;