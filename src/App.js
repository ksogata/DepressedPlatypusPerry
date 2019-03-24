import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
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
            <NavLink to="/explore">Explore Experiences</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/experience">Add An Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </Nav>
        
        
        <Route path="/explore" component={Explore} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        
      </Container>
    );
  }
}

export default App;
