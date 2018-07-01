import React, { Component } from 'react';
import './App.css';

import TranslatorInput from './components/TranslatorInput';
import TranslatorOutput from './components/TranslatorOutput';

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
				<TranslatorInput translatePhraseData={this.translatePhrase} />
				<TranslatorOutput phrase={this.state.translatedPhrase} />
			</div>
		);
	}
}

export default App;
