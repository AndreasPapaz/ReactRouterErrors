import React, { PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Image } from 'semantic-ui-react'
import JournalForm from './JournalForm';
import axios from 'axios';

import helpers from '../../utils/helpers';


class JournalPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			entry: {
				user: '',
				title: '',
				body: '',
				location: '',
				geoCode: ''
			}
		};
		this.processForm = this.processForm.bind(this);
		this.changeEntry = this.changeEntry.bind(this);
	}

	componentWillMount() {
		var userId = localStorage.getItem('userId');
		console.log("JOURN PAGE", userId);
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.entry.location !== this.state.entry.location) {
			console.log("updated");

			const entry = {
				user: this.state.entry.user,
				title: this.state.entry.title,
				body: this.state.entry.body,
				location: this.state.entry.location,
				geoCode: this.state.entry.geoCode
			}

			axios.post('/journalentry', entry).then(function(res) {

			});
			this.context.router.push('/dashboard/journal')
		}
	}

	processForm(event) {
		event.preventDefault();

		console.log('this is the location . ', location);

		helpers.runQuery(this.state.entry.location).then(function(data) {
			console.log("this is the journal data : ", data);
			var userId = localStorage.getItem('userId');
			this.setState({
				entry: {
					user: userId,
					title: this.state.entry.title,
					body: this.state.entry.body,
					location: data.country,
					geoCode: data.country_code
				}
			});
		}.bind(this));

	}

	changeEntry(event) {
		const field = event.target.name;
		const entry = this.state.entry;
		entry[field] = event.target.value;
			console.log(field);
		this.setState({
			entry
		});
	}

	render() {
		return(
			<JournalForm
			onSubmit={this.processForm}
			onChange={this.changeEntry}
			entry={this.state.entry}
			/>
		);
	}

}
JournalPage.contextTypes = {
  router: React.PropTypes.any
};


JournalPage.PropTypes = {
    children: PropTypes.object.isRequired
};

export default JournalPage;
