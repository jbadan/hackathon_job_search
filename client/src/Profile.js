import React, { Component } from 'react';
import { render } from "react-dom";
import './App.css';
import TextInput from './TextInput.js';

import WordCloud from "wordcloud";

const styles = {
 fontFamily: "sans-serif",
 textAlign: "center"
};

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ''
    }
  }
  handleChangeValue = e => this.setState({
    list: e.target.value
  })
  componentDidMount() {
     WordCloud(this.refs["my-canvas"], {
       list: this.state.list,
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
    return (
      <div className="App">
           <TextInput
              value={this.state.list}
              onChangeValue={this.handleChangeValue}
            />
           <div style={styles}>
              <canvas ref="my-canvas" />
          </div>
      </div>
    );
  }
}
export default Profile;
