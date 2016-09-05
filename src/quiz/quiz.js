import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  Question from "./components/question";
import  Results from "./components/result";
import * as questionActions from './actions/questionAction'


class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 'Далее',
            result: false,
            sense: '',
            data: this.props.data
        }
    }

    nextQuestionHandler = (e) => {
      if(this.props.result.selectQuestion[this.props.result.currentQuestion] && this.props.result.currentQuestion < this.props.data.question.length) {
        this.props.questionActions.nextQuestion(this.props.result.currentQuestion + 1)
      }
      if (this.props.result.currentQuestion >= this.props.data.question.length) {
        this.resultShow();
      }
    }

    resultShow = () => {
      let result = this.props.result.selectQuestion
      result = [result['1'], result['2'], result['3']];
      result = result.filter(function(e) {
        return e === 'bad'
      });
      this.setState({result: true });
      if (result.length >= 2) {
          this.props.questionActions.selectSense('bad');
          this.setState({sense: 'bad'});
      } else {
          this.setState({sense: 'good'});
          this.props.questionActions.selectSense('good');
      }
    }
  	render() {
      console.log(this.state.result);
      let title = 'Вопрос ' + this.props.result.currentQuestion + ' / ' + this.props.data.question.length
    	return (
    	<div className={"quiz__container " + this.state.sense}>
    		<h3>{title}</h3>
        <Question active={this.state.result} data={this.state.data} question={this.props.result.currentQuestion} />
        <Results result={this.state.result} data={this.state.data.sense[this.state.sense]} />
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