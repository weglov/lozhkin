import React, { Component } from 'react';
import { data } from './data_config'
import $ from "jquery";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: data.question
        }
    }
    componentDidMount() {
       $('#epsiode, #bottom, .mouse').slideUp(500);
        $('.logo__title').delay(500).fadeOut(500);
      $('h2').click(function(event) {
        $('#epsiode, #bottom, .mouse').slideUp(500);
        $('.logo__title').delay(500).fadeOut(500);
      });
    }
  render() {
    console.log(data);
    return (
      <div className="quiz">
      <h1>Юмор и котики –
средство от всех бед</h1>
        <div className="quiz__container">
          {data.title}
        </div>
      </div>
    );
  }
}

export default Quiz;
