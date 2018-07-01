import React, { Component } from 'react';

class TranslatorOutput extends Component {
	render() {
		const hasTranslation = this.props.phrase !== '';

		return (
			<div className="TranslatorOutput">
				{hasTranslation ? (
					<div className="row">
						<div className="card grey lighten-3 col s10 xl8 offset-xl2 offset-s1">
							<div className="card-content">
								<span className="card-title">
									english to spanish
									<button className=" right btn waves-effect translate-btn grey darken-3">
										Save
									</button>
								</span>
								<p>{this.props.phrase}</p>
							</div>
						</div>
					</div>
				) : (
					<div />
				)}
			</div>
		);
	}
}

export default TranslatorOutput;
