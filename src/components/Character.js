import React from 'react';
import axios from 'axios';

class Character extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			character: {}
		}
	}

	async componentDidMount() {
		let id = this.props.match.params.id;
		let character = await axios.get('https://swapi.co/api/people/'+id);
		
		this.setState({
			character: character.data
		})
	}

	render() {
		return (
			<div>
				<h1>Name: {this.state.character.name}</h1>
				<h1>Weight: {this.state.character.mass}</h1>
			</div>
		)
	}
}

export default Character;
