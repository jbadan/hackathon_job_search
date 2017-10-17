import React, { Component } from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

import './App.css';
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      users: [],
      loggedIn: '',
      redirect: false
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  componentDidMount(){
    fetch('/users')
    .then(response => response.json())
    .then(response => this.setState({users:response}))
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let tempDiv = '';
    let blah = '';
    if((this.state.email === this.state.users[0].email) && (this.state.password === this.state.users[0].password)){
      tempDiv = <div> Success! </div>
      blah = true;

    }else{
      tempDiv = <div> Sorry that username/password combination is incorrect.</div>
    }
    this.setState({
      loggedIn: tempDiv,
      redirect: blah
    })
}
  render() {
    const{redirect} = this.state;
    if(redirect){
      return <Redirect to ='/profile'/>
    }
    return (
      <div id='signin'>
      <h1>Please login to get started!</h1>
      <form>
        <label>
          Email
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
        </label>
        <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
         </label>

        <button onClick={(e) => this.handleSubmit(e)}>Log in</button>
      </form>
      {this.state.loggedIn}
      </div>
    );
  }
}
export default LogIn;
