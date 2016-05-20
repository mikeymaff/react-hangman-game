var React = require('react');
var Play = require('../components/Play');

function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var PlayContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			secretWord:'',
			guessedLetter: '',
			guessedLetters: '',
			revealedWord: '',
			remainingGuesses: '',
		}
	},
	componentWillMount: function() {
		var secretWord = this.props.location.query.secretWord;

		var revealedWord = secretWord.split('').map(function() {
			return '_';
		});

		this.setState({
			secretWord: secretWord,
			revealedWord: revealedWord,
			remainingGuesses: 6,
			guessedLetters: ''
		});
	},
	handleUpdateLetter: function(e) {
		this.setState({
			guessedLetter:e.target.value.substring(0,1)
		});
	},
	handleSubmitLetter: function(e) {
		e.preventDefault();
		var newRevealedWord = this.updateRevealedWord(this.state);
		this.setState({
			revealedWord:newRevealedWord,
			guessedLetter:''
		});
		if(newRevealedWord.indexOf('_') < 0) {
			this.context.router.push('/win')
		}
	},
	updateRevealedWord: function(state) {
		if(state.secretWord.indexOf(state.guessedLetter) > -1) {
			//guessed letter is contained within secretWord
			if(state.guessedLetters.indexOf(state.guessedLetter) > -1) {
				//already guessed this letter
				return state.revealedWord; 
			} else {
				//newly guessed, correct letter
				state.guessedLetters = this.addToGuessedLetters(state.guessedLetter);
				return this.getRevealedWord(state);
			}
		} else {
			this.decrementRemainingGuesses(state.remainingGuesses);
			return state.revealedWord;
		}
	},
	getRevealedWord: function(state) {
		return state.secretWord.split('').map(function(value) {
			if(state.guessedLetters.indexOf(value) > -1) {
				return value;
			} else {
				return '_';				
			}
		});
	},
	decrementRemainingGuesses: function(amount) {
		var newAmout = (amount - 1);
		if(newAmout < 1) {
			this.context.router.push('/lose')
		}
		this.setState({
			remainingGuesses: newAmout
		});
	},
	addToGuessedLetters: function(letter) {
		var guessedLetters = this.state.guessedLetters + letter;
		this.setState({
			guessedLetters: guessedLetters
		});
		return guessedLetters;
	},
	render: function() {
		return (
			<Play 
				revealedWord={this.state.revealedWord}
				onSubmitLetter={this.handleSubmitLetter}
				onUpdateLetter={this.handleUpdateLetter}
				guessedLetter={this.state.guessedLetter}
				remainingGuesses={this.state.remainingGuesses}
			/>
		)
	}
});

module.exports = PlayContainer;