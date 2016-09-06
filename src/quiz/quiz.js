import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import  Question from "./components/question";
import  Results from "./components/result";
import  ButtonShare from "./components/share";
import * as questionActions from './actions/questionAction'


class QuizContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 'Далее',
            result: false,
            sense: '',
            title: 'Вопрос ' + this.props.result.currentQuestion + ' / ' + this.props.data.question.length,
            data: this.props.data,
            finish: ''
        }
    }

    nextQuestionHandler = (e) => {
      if(this.props.result.selectQuestion[this.props.result.currentQuestion] && this.props.result.currentQuestion < this.props.data.question.length) {
        this.props.questionActions.nextQuestion(this.props.result.currentQuestion + 1)
      }
      if (this.props.result.currentQuestion >= this.props.data.question.length) {
        this.resultShow();
      }
      if(this.props.result.currentQuestion >= this.props.data.question.length && this.props.result.finish) {
        this.endQuiz(this.props.result.finish);
      }
    }
    endQuiz = (e) => {
      this.setState({
        finish: e,
         title:this.props.data.sense[this.state.sense].answer[e]
      });
    }
    resultShow = () => {
      let result = this.props.result.selectQuestion
      result = [result['1'], result['2'], result['3']];
      result = result.filter(function(e) {
        return e === 'bad'
      });
      this.setState({
        result: true
      });
      if (result.length >= 2) {
          this.props.questionActions.selectSense('bad');
          this.setState({sense: 'bad', title: this.props.data.sense['bad'].title});
      } else {
          this.setState({sense: 'good', title: this.props.data.sense['good'].title});
          this.props.questionActions.selectSense('good');
      }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.result.currentQuestion !== this.props.result.currentQuestion) {
          this.setState({
            title: 'Вопрос ' + nextProps.result.currentQuestion + ' / ' + this.props.data.question.length 
          });  
        }
        
    }
  	render() {
    	return (
    	<div className={"quiz__container " + this.state.sense}>
    		<h3>{this.state.title}</h3>
        <Question active={this.state.result} data={this.state.data} question={this.props.result.currentQuestion} />
        <Results answer={this.state.finish} finish={this.props.questionActions.resultSense} result={this.state.result} connect={this.state.data.result} data={this.state.data.sense[this.state.sense]} />
        <button className={this.state.finish ? 'active' : 'noactive'} onClick={this.nextQuestionHandler}>{this.state.next}</button>
        <ButtonShare active={this.state.finish ? 'active' : 'noactive'} uid={this.state.finish} />
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