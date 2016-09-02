import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import './landing.css';
import Quiz from './quiz/index';
import "jquery-colorbox";

if (location.href === 'http://localhost:3000/') {
	ReactDOM.render(
	  <Quiz />,
	  document.getElementById('quiz')
	);

}
