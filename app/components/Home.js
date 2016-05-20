var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');

function Home (props) {
	return (
		<MainContainer>
			<h1>Hangman</h1>
			<p className='lead'>Enter the word to be guessed!</p>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitWord}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Secret Word"
							onChange={props.onUpdateWord}
							value={props.secretWord}
							type="text" />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button
							className="btn btn-block btn-success"
							type="submit">
								Play Hangman!
						</button>
					</div>
				</form>
			</div>
		</MainContainer>
	)
}


module.exports = Home;