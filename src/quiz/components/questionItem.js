import React, { Component } from 'react';

export default class QuestionItem extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }
	render() {
		let id = this.props.id;
		let answer = this.props.label[this.props.data]
		return (
			<li className="quiz__var">
				<input onChange={this.props.change} value={this.props.data} checked={this.props.active === this.props.data}  id={"quiz__var_" + id} type="radio" />
				<label htmlFor={"quiz__var_" + id} >{answer}</label>
			</li>
		);
	}
}