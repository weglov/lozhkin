import React, { Component } from 'react';
import $ from "jquery";
// import { data } from './data_config'
import QuizContainer from "./quiz";
// redux
import { Provider } from 'react-redux'
import configureStore from './store/config'

const store = configureStore()

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ''
        }
    }
    componentDidMount() {
      
        // $('#epsiode, #bottom, .mouse').slideUp(500);
        // $('.logo__title').delay(500).fadeOut(500);
        
        $('#bottom__quiz').click(function(event) {
          $('html, body').animate({
              scrollTop: 0
          }, 1000);
          $('#epsiode, #bottom, .mouse, #about').slideUp(500);
          $('.logo__title').delay(500).fadeOut(500);
          $('.quiz').delay(1000).fadeIn(500);
          
          $('#first_screen, body').addClass('active__quiz');
        });
    }
  render() {
    return (
      <div className="quiz">
          <h1>Юмор и котики – средство от всех бед</h1>
          <Provider store={store}>
            <QuizContainer />
          </Provider>
      </div>
    );
  }
}

export default Quiz;
