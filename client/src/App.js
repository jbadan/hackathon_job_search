import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput.js';
import Profile from './Profile.js';
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
          <nav>
            <Link to="/">Login</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Switch>
           <Route exact path="/" component={LogIn} />
           <Route path="/profile" component={Profile} />
           <Route component={NotFound} />
         </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
