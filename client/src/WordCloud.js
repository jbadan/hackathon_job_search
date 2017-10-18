import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import TextInput from './TextInput.js';
import WordCloud from "wordcloud";


const styles = {
 fontFamily: "sans-serif",
 textAlign: "center"
};

class WordCloudDisplay extends Component {
  constructor(props){
    super(props)
  }
  handleChangeValue = e => this.setState({
    list: e.target.value
  })
  componentDidMount() {
    WordCloud(this.refs["my-canvas"], {
      list: this.props.listFromParent,
      weightFactor: 4,
      fontFamily: "Play",
      color: "#"+((1<<24)*Math.random()|0).toString(16),
      rotateRatio: 1,
      rotationSteps: 10,
      backgroundColor: "white"
    });
  }
  render() {
    return (
      <div className="App">
           <div style={styles}>
              <canvas ref="my-canvas" />
          </div>
          <a href="/profile"> Reset </a>
      </div>
    );
  }
}
export default WordCloudDisplay;
