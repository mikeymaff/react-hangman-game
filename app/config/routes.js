var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var HomeContainer = require('../containers/HomeContainer');
var PlayContainer = require('../containers/PlayContainer');
var Lose = require('../components/Lose');
var Win = require('../components/Win');

var secretWord = 'something';

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={HomeContainer} />
			<Route path='play' component={PlayContainer}/>
			<Route path='lose' component={Lose}/>
			<Route path='win' component={Win}/>
		</Route>
	</Router>
);

module.exports = routes;