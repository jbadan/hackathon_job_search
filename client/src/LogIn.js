import React, { Component } from 'react';
import './App.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('A user has been logged in' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id='signin'>
      <h1>Please login to get started!</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
        <input type='submit' value='Login' />
      </form>
      </div>
    );
  }
}
export default LogIn;
