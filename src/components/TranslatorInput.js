import React, { Component } from 'react';

class TranslatorInput extends Component {
	constructor() {
		super();

		this.state = {
			word: ''
		};

		this.translateWord = this.translateWord.bind(this);
		this.translateWordInput = this.translateWordInput.bind(this);
	}

	translateWordInput(e) {
		this.setState({ word: e.target.value });
	}

	translateWord(e) {
		e.preventDefault();
		this.props.translateWord(this.state.word);
	}

	render() {
		return (
			<div className="Translator">
				<form onSubmit={this.translateWord}>
					<input
						type="text"
						value={this.state.word}
						onChange={this.translateWordInput}
					/>
					<button>Translate</button>
				</form>
			</div>
		);
	}
}

export default TranslatorInput;
