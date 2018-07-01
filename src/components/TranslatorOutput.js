import React, { Component } from 'react';

class TranslatorOutput extends Component {
	render() {
		return (
			<div className="TranslatorOutput">
				<h1>Translated Word</h1>
				<p>{this.props.word}</p>
			</div>
		);
	}
}

export default TranslatorOutput;
