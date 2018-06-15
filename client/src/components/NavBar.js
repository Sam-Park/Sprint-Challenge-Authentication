import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, Button } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';

class NavBar extends Component {
    state = {
        redirect: false,
    }
    render() { 
        const redirect = this.state.redirect;
        if (redirect) {
            return <Redirect to="/login" />
        }
        return (<div>
            <Navbar>
                <NavbarBrand>
                </NavbarBrand>
                <Nav>
                <NavItem>
                    <Link to="/jokes">
                    <Button>
                        Jokes
                        </Button>
                        </Link>
                    </NavItem>
                <NavItem>
                <Link to="/login">
                    <Button>
                        Log In
                        </Button>
                        </Link>
                    </NavItem>
                <NavItem>
                    <Button onClick={this.signOut}>
                    Sign Out
                    </Button>
                    </NavItem>
              </Nav>
                </Navbar>
            </div> 
             )
    }

    signOut = () => {
        if (localStorage.getItem('Authorization')) {
            localStorage.removeItem('Authorization')
            this.setState({ redirect: true })
        }
        console.log("redirect", this.state.redirect);
    };
}


 
export default NavBar;
        
 
