import React, { Component } from 'react';
import './App.css';

import TranslatorInput from './components/TranslatorInput/TranslatorInput';
import TranslatorOutput from './components/TranslatorOutput/TranslatorOutput';

import { yandex_key } from './config';

class App extends Component {
	constructor() {
		super();

		this.state = {
			translations: []
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
				let translation = {
					phrase: data.text[0],
					lang: phraseData.lang
				};
				let newTranslations = this.state.translations.slice();
				newTranslations.unshift(translation);
				this.setState({ translations: newTranslations });
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
					{this.state.translations.map((translation, i) => {
						return (
							<TranslatorOutput
								translation={translation}
								key={i}
							/>
						);
					})}
					{/* <TranslatorOutput
						phrase={{
							phrase: this.state.translatedPhrase,
							lang: this.state.language
						}}
					/> */}
				</div>
			</div>
		);
	}
}

export default App;
