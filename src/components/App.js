import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Character from './Character';

const App = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/characters/:id" component={Character} />
			</div>
		</Router>
	)
}

export default App;