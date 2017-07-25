import React, { PropTypes } from 'react';
import { Button, Checkbox, Form, Icon, Card} from 'semantic-ui-react';
import { Link } from 'react-router';

const JournalForm = ({
	onSubmit,
	onChange,
	entry,
}) => (

	<Form className='login-form' action='/' onSubmit={onSubmit}>

		<Form.Field>
			<label>Title</label>
			<input
			name='title'
			onChange={onChange}
			value={entry.title}
			placeholder='what did you do today!' />
		</Form.Field>

		<Form.TextArea
		label='tell me about your trip'
		name='body'
		onChange={onChange}
		value={entry.body}
		/>

		 <Button type='submit' primary>Sign up</Button>

	</Form>
);


JournalForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	entry: PropTypes.object.isRequired
};

export default JournalForm;