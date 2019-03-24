import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import About from './components/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
        </div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
