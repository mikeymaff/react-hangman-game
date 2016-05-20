var React = require('react');
var Link = require('react-router').Link;
var MainContainer = require('./MainContainer');

function Win (props) {
	return (
		<MainContainer>
			<h1>You Win!</h1>
			<div className='col-sm-12'>
				<Link to='/'>
					<button type='button' className='btn btn-lg btn-danger'>Play Again</button>
				</Link>
			</div>
		</MainContainer>
	)
}


module.exports = Win;