import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput.js';
import NotFound from './NotFound.js';
import LogIn from './LogIn.js'

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
          <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                <li className="navList"><Link to="/">Login</Link></li>
                <li className="navList"><Link to="/profile">Profile</Link></li>
                </ul>
              </div>
          </div>
          </nav>
          <Switch>
           <Route exact path="/" component={LogIn} />
           <Route path="/profile" component={TextInput} />
           <Route component={NotFound} />
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
