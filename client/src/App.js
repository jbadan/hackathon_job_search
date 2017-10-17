import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
           <TextInput />
      </div>
    );
  }
}

export default App;
