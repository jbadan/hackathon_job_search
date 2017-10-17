import React, { Component } from 'react';
import './App.css';
import App from './App.js'
import WordCloudDisplay from './WordCloud.js'

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
    let newList = this.state.list;
    let textInput = this.state.value;
    //words is array including each word from input
    var words = textInput.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
          }
          freqMap[w] += 1;
        });
    var result = Object.keys(freqMap).map(function(key) {
      return [String(key), freqMap[key]];
    });
    //result converts freqMap object into array of arrays
    this.setState({
      list: result
    })
  }
  render() {
    if(this.state.list.length > 0){
      var display = <WordCloudDisplay listFromParent={this.state.list} />
    }
    return (
      <div className="App row">
      <form className="col-md-6" onSubmit={this.handleSubmit}>
        <label> Insert your text here:  </label>
        <textarea className="form-control" rows="8" type="text" value={this.state.value} onChange={this.handleChange}> </textarea>
        <input type="submit" value="Submit" />
      </form>
      {display}
      </div>
    );
  }
}

export default TextInput;
