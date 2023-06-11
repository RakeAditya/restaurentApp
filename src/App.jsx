import React from 'react';
import { About, Chef, Findus, Foot, Gallary, Intro, Laurels, Menu, Mainhead } from './boxes';
import { Navbar } from './components';
import './app.css';
const App = () => {
	return (
		<div>
			<Navbar />
			<Mainhead />
			<About />
			<Menu />
			<Chef />
			<Intro />
			<Laurels />
			<Gallary />
			<Findus />
			<Foot />
		</div>
	);
};

export default App;
