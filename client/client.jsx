import React from 'react';
import ReactDOM from 'react-dom';
import { handleModifyAnswerVotes } from '../shared/utility';
import { App } from './App.jsx';

let state;

fetch('http://localhost:7777/data')
	.then(data => data.json())
	.then(json => {
		state = json;
		console.log('Got the state', state);
		render();
	});

// ReactDOM.render(<App />, document.querySelector('#Container'));

function handleVote(answerId, increment) {
	state.answers = handleModifyAnswerVotes(state.answers, answerId, increment);
	fetch(`vote/${answerId}?increment=${increment}`);
	render();
}

function render() {
	ReactDOM.hydrate(
		<App {...state} handleVote={handleVote} />,
		document.querySelector('#Container')
	);
}
// render();
