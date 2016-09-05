import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  Question from "./components/question";
import * as questionActions from './actions/questionAction'


class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 'Далее'
        }
    }
    nextQuestionHandler = (e) => {
      if(this.props.result.selectQuestion[this.props.result.currentQuestion] && this.props.result.currentQuestion !== this.props.data.question.length) {
        this.props.questionActions.nextQuestion(this.props.result.currentQuestion + 1)
      }
    }
  	render() {
      let title = 'Вопрос ' + this.props.result.currentQuestion + ' / ' + this.props.data.question.length
    	return (
    	<div className="quiz__container">
    		<h3>{title}</h3>
        <Question data={this.props.data} question={this.props.result.currentQuestion} />
        <button onClick={this.nextQuestionHandler}>{this.state.next}</button>
    	</div>
    	);
	}
}

function mapStateToProps (state) {
  return {
    data: state.data.data,
    result: state.result
  }
}

function mapDispatchToProps(dispatch) {
  return {
    questionActions: bindActionCreators(questionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)