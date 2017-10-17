import React, { Component } from 'react';
import './App.css';
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      users: [],
      loggedIn: ''
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
    if((this.state.email === this.state.users[0].email) && (this.state.password === this.state.users[0].password)){
      tempDiv = <div> Success! </div>
    }else{
      tempDiv = <div> Sorry that username/password combination is incorrect.</div>
    }
    this.setState({
      loggedIn: tempDiv
    })
  }
  render() {
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
            <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
         </label>

        <button onClick={(e) => this.handleSubmit(e)}>Log in</button>
      </form>
      {this.state.loggedIn}
      </div>
    );
  }
}
export default LogIn;
