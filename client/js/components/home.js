import React from 'react';
import {connect} from 'react-redux';
import Card from './card';

class Home extends React.Component {
	render() {
		return <div>
			<h1>GamerCard</h1>
			<Card />
		</div>;
	}
}

module.exports = Home;
