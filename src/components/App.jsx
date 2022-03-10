import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionNum = 0;

  return (
    <div className="app">
      Trivia!
      <Question text={data[0].question.text} />
      <Answer answer={3} />
      <NextQuestion />
    </div>
  );
}
function NextQuestion(props) {
  return <button onClick={props.goToNextQuestion}> Next Question </button>;
}

function Answer(props) {
  return <div> {props.answer} </div>;
}

export default App;

function Question(props) {
  return <h1>{props.text}</h1>;
}
