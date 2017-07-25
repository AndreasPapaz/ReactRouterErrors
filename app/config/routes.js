import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Switch, Redirect } from 'react-router';

import AuthContainer from '../components/AuthContainer';
import LandingPage from '../components/LandingPage';
import LoginPage from '../components/children/register/LoginPage';
import SignUpPage from '../components/children/register/SignUpPage';
import Dashboard from '../components/Dashboard';
import test from '../components/children/dashboard/test';
import JournalPage from '../components/children/dashboard/JournalPage';

export default (

	<Router history={browserHistory}>
		<Route path='/' component={LandingPage}>
			<Route path='dashboard' component={Dashboard}>
				<Route path='test' component={test} />
				<Route path='entry' component={JournalPage} />
				<Route path='thistest' component={JournalPage} />
				<IndexRoute component={test} />
			</Route>
			<Route path='login' component={LoginPage} />
			<Route path='signup' component={SignUpPage} />
			<IndexRoute component={LoginPage} />
		</Route>
	</Router>

);