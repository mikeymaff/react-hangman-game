var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');

function Play (props) {
	return (
		<MainContainer>
			<h1 className="revealed-word">{props.revealedWord}</h1>
			<div className="col-sm-6">
				<form onSubmit={props.onSubmitLetter}>
					<div className="form-group">
						<p>Type a letter and submit your guess!</p>
						<input
							className="form-control"
							onChange={props.onUpdateLetter}
							value={props.guessedLetter}
							type="text" />
					</div>
					<div className="form-group col-sm-6 col-sm-offset-3">
						<button
							className="btn btn-block btn-success"
							type="submit">
								Submit Guess
						</button>
					</div>
				</form>
			</div>
			<div className="col-sm-6">
				<h2>{props.remainingGuesses}</h2>
				<p className="text-center">Remaining Guesses</p>
			</div>
		</MainContainer>
	)
}


module.exports = Play;