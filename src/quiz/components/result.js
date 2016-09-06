import React, { Component } from 'react';
import QuestionItem from './questionItem';

export default class Results extends Component {
	constructor(props) {
        super(props);
        this.state = {
            'selectAnswer': ''
        }
    }
    onChange = (e) => {
        this.setState({
            selectAnswer: e.target.value
        })
        this.props.finish(e.target.value)
        }
    render() {
    	if (this.props.answer) {
            let data = this.props.connect[this.props.answer];
            const answerImg = '//lozhkin.ren.tv/result/'+ this.props.answer +'.jpg';
    			return (
                        <div className="quiz__wrap">
                            <div className="quiz__result">
                                <div className="quiz__result__diagnos" dangerouslySetInnerHTML={{__html: data.title }} />
                                <div className="quiz__result__therapy" dangerouslySetInnerHTML={{__html: data.desc }} />
                                <div className="quiz__result__img"><img alt={this.state.selectAnswer} src={answerImg}/></div>
                            </div>
                        </div>
                        );
    	} else if (this.props.result) {
            let question = Object.keys(this.props.data.answer);
                        let nodes = question.map((nodes,i) => {
                          return (<QuestionItem id={i} key={i} change={this.onChange} active={this.state.selectAnswer} label={this.props.data.answer} data={nodes}></QuestionItem>);
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
