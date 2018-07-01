import React, { Component } from 'react';
import './App.css';

import TranslatorInput from './components/TranslatorInput';
import TranslatorOutput from './components/TranslatorOutput';

class App extends Component {
	constructor() {
		super();

		this.state = {
			word: ''
		};

		this.translateWord = this.translateWord.bind(this);
	}

	translateWord(word) {
		this.setState({ word });
	}

	render() {
		return (
			<div className="App">
				<TranslatorInput translateWord={this.translateWord} />
				<TranslatorOutput word={this.state.word} />
			</div>
		);
	}
}

export default App;
