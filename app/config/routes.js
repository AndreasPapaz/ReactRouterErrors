import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Switch, Redirect } from 'react-router';


import LandingPage from '../components/LandingPage';
import Main from '../components/Main';
import LoginPage from '../components/children/register/LoginPage';
import SignUpPage from '../components/children/register/SignUpPage';
import Dashboard from '../components/Dashboard';
import test from '../components/children/dashboard/test';


export default (

	<Router history={browserHistory}>
		<Route path='/' component={LandingPage}>
			<Route path='dashboard' component={Dashboard}>
				<Route path='test' component={test} />
				<IndexRoute component={test} />
			</Route>
			<Route path='login' component={LoginPage}>
				<Route path='signup' component={SignUpPage} />
			</Route>
			<Route path='dashboard' component={Dashboard} />
			<Route path='signup' component={SignUpPage} />
			<IndexRoute component={LoginPage} />
		</Route>
	</Router>

);


// export class routes extends React.Component {
// 	render() {
// 		return (
// 		<Route path='/' component={App2}>
// 			<Route path='login' component={LoginPage} />
// 			<Route path='signup' component={SignUpPage} />

// 			<Route component={AuthContainer}>
// 				<Route path='dashboard' component={Dashboard} />
// 				<Route path='test' component={test} />
// 			</Route>
// 		</Route>
// 	)
// 	}
// }


