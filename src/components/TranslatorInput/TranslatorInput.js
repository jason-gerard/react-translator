import React, { Component } from 'react';
import './TranslatorInput.css';

class TranslatorInput extends Component {
	constructor() {
		super();

		this.state = {
			initialPhrase: '',
			languageFrom: '',
			languageTo: ''
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

		let phrase = this.state.initialPhrase;
		let fromLang = this.state.languageFrom;
		let toLang = this.state.languageTo;

		if (phrase === '' || fromLang === '' || toLang === '') {
			return alert('All fields are required');
		}

		this.props.translatePhraseData({
			phrase: this.state.initialPhrase,
			lang: `${this.state.languageFrom}-${this.state.languageTo}`
		});
	}

	render() {
		return (
			<div className="Translator row">
				<form
					onSubmit={this.translateInitialPhrase}
					className="card col s10 xl8 offset-xl2 offset-s1 grey lighten-3"
				>
					<div className="card-content">
						<div className="row mb-0">
							<div className="select-field input-field col s6 m5 l4 xl3">
								<select
									value={this.languageFrom}
									onChange={this.languageFromUpdate}
									name="language-from"
									defaultValue="default"
								>
									<option value="default" disabled>
										Language From
									</option>
									<option value="en">English</option>
									<option value="ru">Russian</option>
									<option value="es">Spanish</option>
									<option value="fr">French</option>
									<option value="zh">Chinese</option>
								</select>
							</div>
							<div className="select-field input-field col s6 m5 l4 xl3">
								<select
									value={this.languageTo}
									onChange={this.languageToUpdate}
									name="language-to"
									defaultValue="default"
								>
									<option value="default" disabled>
										Language To
									</option>
									<option value="en">English</option>
									<option value="ru">Russian</option>
									<option value="es">Spanish</option>
									<option value="fr">French</option>
									<option value="zh">Chinese</option>
								</select>
							</div>
							<div className="input-field col s12 l4 translate-options">
								<button className="btn waves-effect translate-btn grey darken-3">
									Translate
								</button>
							</div>
						</div>
					</div>
					<div className="card-action">
						<div className="row mb-0">
							<div className="input-field col s12 mb-0">
								<textarea
									placeholder="Words To Translate"
									id="translatedPhraseInput"
									className="materialize-textarea translator-text-area"
									value={this.state.initialPhrase}
									onChange={this.initialPhraseUpdate}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default TranslatorInput;
