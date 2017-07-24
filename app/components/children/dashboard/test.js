import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';

export default class test extends Component {
	componentWillMount() {
		// console.log("this is the dashboard");
		var userId = localStorage.getItem('userId');
		// console.log('USERID test : ', userId);
		this.checkId(userId);
		this.initializeState();
	}

	checkId(userId) {
		// if (userId) {
		// 	console.log(userId);
		// 	axios.post('/getUser', {'userId': userId}).then(res => {
		// 		console.log('winner log in middle');
		// 		console.log(res.data.name);

		// 		this.setState({
		// 			name: res.data.name
		// 		});
		// }
	}

	render() {
	return(
	    <div>
	    	<h1> dash test</h1>
	    </div>
	);
	}
}

test.contextTypes = {
  router: React.PropTypes.any
};
