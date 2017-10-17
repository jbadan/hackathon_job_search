import React from "react";
import { render } from "react-dom";
import './App.css'

import WordCloud from "wordcloud";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  componentDidMount() {
    WordCloud(this.refs["my-canvas"], {
      list: [["foo", 20], ["bar", 6]],
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
      <div style={styles}>
        <canvas ref="my-canvas" />
      </div>
    );
  }
}

export default App
