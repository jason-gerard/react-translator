import React, { Component } from 'react';

class TranslatorOutput extends Component {
	render() {
		return (
			<div className="TranslatorOutput">
				<h1>Translated Phrase</h1>
				<p>{this.props.phrase}</p>
			</div>
		);
	}
}

export default TranslatorOutput;
