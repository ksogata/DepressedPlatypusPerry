import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import Explore from './components/explore';
import About from './components/about';
import Experience from './components/experience';
import MyExperiences from './components/my-experiences';
import Profile from './components/profile';
import './App.css';

const styles = {
  user: {
    position: "absolute",
    right: "10%",
  },
  usericon: {
    height: "24px"
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="logo.jpg"/>
        </header>
        <Nav pills>
          <NavItem>
            <NavLink to='/explore' activeClassName='active' className='nav-link'>Explore Experiences</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/experience' activeClassName='active' className='nav-link'>Host an Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/my-experiences' activeClassName='active' className='nav-link'>My Experiences</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about' activeClassName='active' className='nav-link'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/profile' activeClassName='active' className='nav-link' style={ styles.user }><img src="user.png" style={ styles.usericon }/></NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route exact path="/" render={() => (
            /*loggedIn ? (
              <Redirect to="/login"/>
            ) : (*/
              <Redirect to="/explore" />
            //)
          )}/>
          <Route path="/explore" component={Explore} />
          <Route path="/experience" component={Experience} />
          <Route path="/my-experiences" component={MyExperiences} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>

        {/* <Login></Login> */}
      </div>
    );
  }
}

export default App;
