import React from 'react';
import About from './About';
import './App.css';
import Nav from './Nav';
import Jokes from './Jokes';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/about' component={About} />
					<Route path='/jokes' component={Jokes} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
