import React from 'react';
import { Card, Flag } from 'semantic-ui-react'

class Result extends React.Component {
	render() {
		return(
			<div>
			<Card
				link
				header={this.props.title}
				meta={this.props.location}
				description={this.props.body}
			/>
			<Flag name={this.props.geoCode} />
			</div>
		)
	}
}

export default Result;