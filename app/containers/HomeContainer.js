var React = require('react');
var ReactRouter = require('react-router');
var Home = require('../components/Home');

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			secretWord:''
		}
	},
	handleUpdateWord: function(e) {
		this.setState({
			secretWord:e.target.value.toLowerCase()
		});
	},
	handleSubmitWord: function(e) {
		e.preventDefault();
		this.context.router.push({
			pathname: '/play',
			query: {
				secretWord: this.state.secretWord
			}
		});
	},
	render: function () {
		return (
			<Home
				onSubmitWord={this.handleSubmitWord}
				onUpdateWord={this.handleUpdateWord}
				secretWord={this.state.secretWord}>
			</Home>
		)
	}
});

module.exports = HomeContainer;