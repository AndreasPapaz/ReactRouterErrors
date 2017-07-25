// import React, {Component} from 'react';
// import { Image } from 'semantic-ui-react';
// import axios from 'axios';

// export default class test extends Component {
// 	componentDidMount() {
// 		console.log("dash test");
// 		console.log(this.props.data);
// 	}
// 	render() {
// 		return(
// 		    <div>
// 		    	<h1> user : </h1>
// 		    </div>
// 		);
// 	}
// }

// // test.contextTypes = {
// //   router: React.PropTypes.any
// // };

import React, { PropTypes } from 'react';

const test = (props) => {
return (
    <div>User name: {props.name}</div>
  );
};

export default test;