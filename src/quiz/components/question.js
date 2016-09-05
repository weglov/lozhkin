import React, { Component } from 'react';
import QuestionItem from './questionItem';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as questionActions from '../actions/questionAction'


class Question extends Component {
	constructor(props) {
        super(props);
        this.state = {
            selectAnswer: ''
        }
    }
    componentWillReceiveProps(nextProps, prevProps) {
    	if (nextProps.question !== this.props.question) {
			this.setState({
					selectAnswer: ''
				})
		}
        
    }
	onChange = (e) => {
		this.setState({
			selectAnswer: e.target.value
		})
		this.props.questionActions.selectQuestion({...this.props.result.selectQuestion, [this.props.question]: e.target.value})
	}

	render() {
		let current = this.props.question - 1;
		let question = Object.keys(this.props.data.question[current].answer)
		let nodes = question.map((nodes,i) => {
		  return (<QuestionItem key={i} id={i} data={nodes} change={this.onChange} active={this.state.selectAnswer} label={this.props.data.question[current].answer}></QuestionItem>);
		});
		if (!this.props.active) {
			return (
				<div className="quiz__wrap">
					<h4>{this.props.data.question[current].title}</h4>
					<ul className="quiz__answers">{nodes}</ul>
				</div>
			);
		} else {
			return null;
		}
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

export default connect(mapStateToProps, mapDispatchToProps)(Question)