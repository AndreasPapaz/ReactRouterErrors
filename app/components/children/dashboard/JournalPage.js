import React, { PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Image } from 'semantic-ui-react'
import JournalForm from './JournalForm';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import superagent from 'superagent'
import sha1 from 'sha1'


class JournalPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			entry: {
				title: '',
				body: ''
			}
		};
		this.processForm = this.processForm.bind(this);
		this.changeEntry = this.changeEntry.bind(this);
	}

	processForm(event) {
		event.preventDefault();

		const cred = {
			title: this.state.entry.title,
			body: this.state.entry.body
		}

		console.log("this is the journal cred . ", cred);
		//some axios post
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
	router: PropTypes.object.isRequired
};

export default JournalPage;



