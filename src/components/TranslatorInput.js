import React, { Component } from 'react';

class TranslatorInput extends Component {
	constructor() {
		super();

		this.state = {
			initialPhrase: '',
			languageFrom: 'en',
			languageTo: 'en'
		};

		this.initialPhraseUpdate = this.initialPhraseUpdate.bind(this);
		this.languageFromUpdate = this.languageFromUpdate.bind(this);
		this.languageToUpdate = this.languageToUpdate.bind(this);
		this.translateInitialPhrase = this.translateInitialPhrase.bind(this);
	}

	initialPhraseUpdate(e) {
		this.setState({ initialPhrase: e.target.value });
	}

	languageFromUpdate(e) {
		this.setState({ languageFrom: e.target.value });
	}

	languageToUpdate(e) {
		this.setState({ languageTo: e.target.value });
	}

	translateInitialPhrase(e) {
		e.preventDefault();
		this.props.translatePhraseData({
			phrase: this.state.initialPhrase,
			lang: `${this.state.languageFrom}-${this.state.languageTo}`
		});
	}

	render() {
		return (
			<div className="Translator">
				<form onSubmit={this.translateInitialPhrase}>
					<input
						type="text"
						value={this.state.initialPhrase}
						onChange={this.initialPhraseUpdate}
					/>
					<select
						value={this.languageFrom}
						onChange={this.languageFromUpdate}
					>
						<option value="en">English</option>
						<option value="ru">Russian</option>
						<option value="es">Spanish</option>
						<option value="fr">French</option>
						<option value="zh">Chinese</option>
					</select>
					<select
						value={this.languageTo}
						onChange={this.languageToUpdate}
					>
						<option value="en">English</option>
						<option value="ru">Russian</option>
						<option value="es">Spanish</option>
						<option value="fr">French</option>
						<option value="zh">Chinese</option>
					</select>
					<button>Translate</button>
				</form>
			</div>
		);
	}
}

export default TranslatorInput;
