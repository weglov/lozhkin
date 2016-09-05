import React, { Component } from 'react';
import { connect } from 'react-redux'

class QuizContainer extends Component {
  	render() {
    	return (
    	<div className="quiz__container">
    		<h3>Привет { this.props.data.title }</h3>
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

export default connect(mapStateToProps)(QuizContainer)