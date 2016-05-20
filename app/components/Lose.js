var React = require('react');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

function Lose (props) {
	return (
		<MainContainer>
			<h1>You Lose!</h1>
			<div className='col-sm-12'>
				<Link to='/'>
					<button type='button' className='btn btn-lg btn-danger'>Try Again</button>
				</Link>
			</div>
		</MainContainer>
	)
}


module.exports = Lose;