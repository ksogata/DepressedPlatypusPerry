import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import Login from './components/login';
import Explore from './components/explore';
import About from './components/about';
import Experience from './components/experience';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  login = () => {
    this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink href="/explore">Explore</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/experience">Experience</NavLink>
          </NavItem>
        </Nav>
        
        
        <Route path="/explore" component={Explore} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        
        {/* <Login></Login> */}
      </Container>
    );
  }
}

export default App;
