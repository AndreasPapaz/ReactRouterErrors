import React, {Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Button, Checkbox, Form, Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router';

export default class Dashboard extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		name: ''
	// 	}
	// }

	handleItemClick(e, { name }) {
		// this.setState({ activeItem: name })
		console.log("clicking on new state");
		console.log(e);
		console.log(name);
		browserHistory.push('/dashboard/' + name);
	}

	componentWillMount() {

		var userId = localStorage.getItem('userId');
		console.log('USERID : ', userId);

		this.state = { activeItem: 'bio'}

		this.checkId(userId);
		// this.initializeState();
		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		// console.log("sign out button");

		// window.localStorage.setItem('userId', null);
		localStorage.clear();
		this.context.router.push('/');
	}

	checkId(userId) {
		if (userId) {
			// console.log("winner winner");
			var userId = localStorage.getItem('userId');
			// console.log(userId);
			axios.post('/getUser', {'userId': userId}).then(res => {
				console.log(res.data.name);
				console.log(res.data.img);
				this.setState({
					user: res.data._id,
					name: res.data.name,
					img: res.data.img
				});
				if (!res) {
					console.log("no user");
					this.context.router.push('/signup');
				}
			})
		} else if (userId == null) {
			console.log("no user");
			this.context.router.push('/signup');
		}
	}

	render() {

		const { activeItem } = this.state;
		const childrenWithProps = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				name: this.state.name,
				img: this.state.img
			});
		});


	return(
		<div>
		<Grid>
		<Grid.Column width={4}>
			<Menu fluid vertical tabular>
			<Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
			<Menu.Item name='entry' active={activeItem === 'entry'} onClick={this.handleItemClick} />
			<Menu.Item name='journal' active={activeItem === 'journal'} onClick={this.handleItemClick} />
			<Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} />
			</Menu>
		</Grid.Column>

		<Grid.Column stretched width={12}>
			<Segment>
				{childrenWithProps}
			</Segment>
		</Grid.Column>
		</Grid>
			<Button onClick={this.signOut}>Log Out</Button>
		</div>
	);
	}
}

Dashboard.contextTypes = {
  router: React.PropTypes.any
};

Dashboard.PropTypes = {
    children: PropTypes.object.isRequired
};
