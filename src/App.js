import React, { Component } from 'react';
import './App.css';

import TranslatorInput from './components/TranslatorInput/TranslatorInput';
import TranslatorOutput from './components/TranslatorOutput/TranslatorOutput';

import { yandex_key } from './config';

class App extends Component {
	constructor() {
		super();

		this.state = {
			translatedPhrase: ''
		};

		this.translatePhrase = this.translatePhrase.bind(this);
	}

	translatePhrase(phraseData) {
		fetch(
			'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' +
				yandex_key +
				'&text=' +
				phraseData.phrase +
				'&lang=' +
				phraseData.lang
		)
			.then(res => res.json())
			.then(data => {
				this.setState({ translatedPhrase: data.text[0] });
			});
	}

	render() {
		return (
			<div className="App">
				<div className="grey darken-3 title-bar light-blue-text text-lighten-3 ">
					<h1 className="center-align">React Translator</h1>
				</div>
				<div className="container">
					<TranslatorInput
						translatePhraseData={this.translatePhrase}
					/>
					<TranslatorOutput phrase={this.state.translatedPhrase} />
				</div>
			</div>
		);
	}
}

export default App;
