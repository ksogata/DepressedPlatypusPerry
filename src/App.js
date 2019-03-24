import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import Login from './components/login';
import Dashboard from './components/dashboard';
import About from './components/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
        
        
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        
        <Login></Login>
      </Container>
    );
  }
}

export default App;
