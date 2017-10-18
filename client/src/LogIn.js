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
      <div className="container-fluid">
      <div className="row text-center">
      <h1 className="headers">CV/Resume Word Cloud Generator</h1>
      <div className="col-sm-4"></div>
        <form className="col-sm-4 padding">
          <label>Email</label>
            <input className="form-control" type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
          <label>Password</label>
              <input className="form-control" type="password" value={this.state.password} onChange={this.handleChangePassword} />
          <button onClick={(e) => this.handleSubmit(e)}>Log in</button>
        </form>
        {this.state.loggedIn}
        <div className="col-sm-4"></div>
      </div>
      <br/>
      <br/>
        <div className="row text-center">
          <img className="col-sm-4 img-responsive img-circle" alt=" " src="img/home6.png"/>
          <img className="col-sm-4 img-responsive img-circle" alt=" "  src="img/home4.png"/>
          <img className="col-sm-4 img-responsive img-circle" alt=" "  src="img/home5.png"/>
        </div>
      </div>

    );
  }
}
export default LogIn;
