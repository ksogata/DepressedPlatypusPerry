import React, { Component } from 'react';
import { Link, Route, Switch, NavLink } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import Explore from './components/explore';
import About from './components/about';
import Experience from './components/experience';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink to='/explore' activeClassName='active' className='nav-link'>Explore Experiences</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/experience' activeClassName='active' className='nav-link'>Add an Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about' activeClassName='active' className='nav-link'>About</NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
        </Switch>

        {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
