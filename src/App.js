import React, { Component } from 'react';
import { Link, Route, Redirect } from "react-router-dom";
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
    // if (this.state.isLoggedIn == true) {
      return (<div>
        <nav>
            <Link to="/explore">Explore</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
        </nav>
        <div>
            <Route path="/login" component={Login}/>
            <Route path="/explore" component={Explore} />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
        </div>
      </div>)
    // } else {
    //   return (
    //     <div>
    //       <Login login={this.login}></Login>
    //     </div>
    //   );
    // }
  }
}

export default App;
