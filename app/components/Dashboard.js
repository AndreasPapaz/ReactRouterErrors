import React, {Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Button, Checkbox, Form, Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router';

export default class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeItem: ''
		};
	}

	handleItemClick(e, {name}) {
		browserHistory.push('/dashboard/' + name);
	}

	componentWillMount() {

		var userId = localStorage.getItem('userId');
		console.log('USERID : ', userId);
		this.checkId(userId);
		this.signOut = this.signOut.bind(this);
	}

	signOut() {
		localStorage.clear();
		this.context.router.push('/');
	}

	checkId(userId) {
		if (userId) {
			var userId = localStorage.getItem('userId');

			axios.post('/getUser', {'userId': userId}).then(res => {
				this.setState({
					user: res.data._id,
					name: res.data.name,
					img: res.data.img
				});
				if (!res) {
					this.context.router.push('/signup');
				}
			})
		} else if (userId == null) {
			this.context.router.push('/signup');
		}
	}

	render() {

		const { activeItem } = this.state

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
			<Menu.Item name='logout' onClick={this.signOut} active={activeItem === 'logout'} />
			</Menu>
		</Grid.Column>

		<Grid.Column stretched width={12}>
			<Segment>
				{childrenWithProps}
			</Segment>
		</Grid.Column>
		</Grid>
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
