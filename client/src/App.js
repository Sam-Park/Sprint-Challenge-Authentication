import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes';
import RegSuccess from './components/RegSuccess';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dad Jokes.</h1>
        <br />
        </header>
        <p className="App-intro">
        </p>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/regsuccess" component={RegSuccess} />
      </div>
    );
  }
}

export default App;
