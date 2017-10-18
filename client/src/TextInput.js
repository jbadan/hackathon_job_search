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
      <div className="container">
        <h1 class="headers">CV/Resume Word Cloud Generator</h1>
        <div id="info-div">
          <h3 class="headers"> What is a word cloud? </h3>
          <p>Word clouds (also known as text clouds or tag clouds) work in a simple way:
          the more a specific word appears in a source of textual data (such as a speech, blog post, or database),
          the bigger and bolder it appears in the word cloud.</p>
          <h3 class="headers">Why do I need a word cloud? </h3>
          <p>Word clouds can identify trends and patterns that would otherwise be unclear or difficult to see in your document.
          This is a a quick and easy way to see which keywords are most present on your resume/CV.
          Input your resume or cover letter to the text box below to generate your custom word cloud. </p>
          <img id="center-image" src="img/sample2.png"/>
        </div>
        <div id="generate">
        <form className="col-md-6" onSubmit={this.handleSubmit}>
          <label> Insert your text here:  </label>
          <textarea id="text-box"className="form-control" rows="8" type="text" value={this.state.value} onChange={this.handleChange}> </textarea>
          <input id="button" type="submit" value="Submit" />
        </form>
        </div>
        {display}
      </div>
    );
  }
}
export default TextInput;
