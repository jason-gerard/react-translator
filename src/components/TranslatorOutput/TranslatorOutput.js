import React, { Component } from 'react';

class TranslatorOutput extends Component {
	render() {
		return (
			<div className="TranslatorOutput">
				<div className="row">
					<div className="card grey lighten-3 col s10 xl8 offset-xl2 offset-s1">
						<div className="card-content">
							<span className="card-title">
								{this.props.translation.lang}
							</span>
							<p>{this.props.translation.phrase}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TranslatorOutput;
