import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Question from "./components/question";

class QuizContainer extends Component {
  	render() {
          console.log(this.props) 
    	return (
    	<div className="quiz__container">
    		<h3>Привет { this.props.data.title }</h3>
        <Question data={this.props.data} />
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