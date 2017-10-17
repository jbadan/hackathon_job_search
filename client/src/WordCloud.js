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
       weightFactor: 5,
       fontFamily: "Times, serif",
       color: function(word, weight) {
          return weight === 12 ? "#f02222" : "#c09292";
      },
       rotateRatio: 0.5,
       rotationSteps: 2,
       backgroundColor: "#ffe0e0"
     });
   }
  render() {
    console.log(this.props.listFromParent)
    return (
      <div className="App">
           <div style={styles}>
              <canvas ref="my-canvas" />
          </div>
      </div>
    );
  }
}
export default WordCloudDisplay;
