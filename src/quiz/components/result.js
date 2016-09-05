import React, { Component } from 'react';
import QuestionItem from './questionItem';

export default class Results extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'nothing': ''
        }
    }
    render() {
    	if (this.props.result) {
    		let question = Object.keys(this.props.data.answer);
			let nodes = question.map((nodes,i) => {
			  return (<QuestionItem id={i} label={this.props.data.answer} key={i} data={nodes}></QuestionItem>);
			});
	    	return (
	    		<div className="quiz__wrap">
					<h4>{this.props.data.desc}</h4>
					<ul className="quiz__answers">{nodes}</ul>
				</div>
	    	);	
    	} else {
    		return null;
    	}
    	
    }
}
