import React, { Component } from 'react';
import { data } from './data_config'

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: data.question
        }
    }
  render() {
    console.log(data);
    return (
      <div className="app">
        <h1>ПЕРВЫЙ</h1>
        {data.title}
      </div>
    );
  }
}

export default Quiz;
