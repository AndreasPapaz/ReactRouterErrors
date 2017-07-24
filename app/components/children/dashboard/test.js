import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';

export default class test extends Component {
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
