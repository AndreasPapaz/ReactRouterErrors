import React, { PropTypes } from 'react'
import { browserHistory, Router } from 'react-router';
import Result from './Result';
import axios from 'axios';

class Journal extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			journal: [],
			message: ''
		}
	}

	componentWillMount() {
		var userId = localStorage.getItem('userId');
		console.log("from the journal : ", userId);

		axios.post('/journal', {'userId': userId}).then(res => {
			if(res.data.length > 0) {
				console.log("its greater than 0");
				const uploadedJournal = res.data;

				let updatedPosts = Object.assign([], this.state.journal);
				updatedPosts.push(uploadedJournal);

				this.setState({
					journal: uploadedJournal
				});

			}
		});
	}

	render() {

		return(
			<div className="result-holder">
				<h3>Your Journal</h3>
				{this.state.journal.map(function(entry, i) {
					return (
						<Result key={i} url={entry.url} title={entry.title} location={entry.location} body={entry.body} geoCode={entry.geoCode} date={entry.date} />
					);
				})}
			</div>
		)
	}
}

Journal.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Journal;