import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  return (
    <div className="app">
      Trivia!
      <Question value={data[0].question.text} />
    </div>
  );
}

class Question extends React.Component {
  render() {
    var question = this.props.value;
    return <h1>{question}</h1>;
  }
}

export default App;
