import React, { Component } from 'react';
import './App.css';
import App from './App.js'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let newList = this.state.list
    
    console.log('textSubmitted: ' + this.state.value);
  }
  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label> Insert your text here:
        <textarea type="text" value={this.state.value} onChange={this.handleChange}> </textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default TextInput;
